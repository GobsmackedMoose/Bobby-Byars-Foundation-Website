import { Component, OnInit } from '@angular/core';
import { Article } from '../models/scholarship';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.page.html',
  styleUrls: ['./scholarships.page.scss'],
  standalone: false,
})
export class ScholarshipsPage implements OnInit {

  scholarshipData: string | undefined;
  allScholarships: Article[] = [];

  constructor(private http: HttpClient) {
    this.http.get('/assets/scholarships.txt', { responseType: 'text' }).subscribe(data => {
      this.scholarshipData = data;
      this.allScholarships = this.setScholarshipList(this.scholarshipData);
    });
  }

  ngOnInit() {}

  setScholarshipList(rawData: string | undefined): Article[] {
    if (!rawData) {
      console.error('No scholarship data found');
      return [];
    }
    let allSections: string[] = rawData.split('----').slice(4, -1);
    let scholarshipArray: Article[] = [];
    for (let i = 0; i < allSections.length; i++) {
      let title = '';
      let amount = '';
      let eligibility = '';
      let dueDate = '';
      let description = '';
      let externalLink = '';

      const lines = allSections[i].trim().split('\n');
      let currentField = '';
      for (const line of lines) {
        if (line.startsWith('Title: ')) { title = line.substring('Title: '.length).trim(); currentField = 'title'; }
        else if (line.startsWith('Amount: ')) { amount = line.substring('Amount: '.length).trim(); currentField = 'amount'; }
        else if (line.startsWith('Eligibility: ')) { eligibility = line.substring('Eligibility: '.length).trim(); currentField = 'eligibility'; }
        else if (line.startsWith('Due Date: ')) { dueDate = line.substring('Due Date: '.length).trim().substring(0, 10); currentField = 'dueDate'; }
        else if (line.startsWith('Description: ')) { description = line.substring('Description: '.length).trim(); currentField = 'description'; }
        else if (line.startsWith('External Link: ')) { externalLink = line.substring('External Link: '.length).trim(); currentField = 'externalLink'; }
        else if (line.trim() !== '' && currentField === 'description') { description += ' ' + line.trim(); }
      }
      if (title && amount && eligibility && dueDate && description && externalLink) {
        // Only add the scholarship if all fields are present
        scholarshipArray.push(new Article(title, amount, eligibility, dueDate, description, externalLink));
      } else {
        console.warn(`Skipping scholarship section ${i + 1} due to missing fields`);
      }
    }

    return scholarshipArray;
  }

}
