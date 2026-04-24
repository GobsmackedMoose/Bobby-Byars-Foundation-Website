import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: false
})
export class EventsPage implements OnInit {

  allArticles: Article[] = [
    new Article(
      "Test Article Title",
      "Test Article Subtitle",
      "01/01/2024",
      "This is the content of the test article. It is meant to demonstrate how an article will be displayed on the news article page.",
      "https://via.placeholder.com/150",
      "Placeholder image for test article"
    ),
    
  ];

  articleData: string | undefined

  constructor(private router: Router, private http: HttpClient) {
    this.http.get('/assets/articles.txt', { responseType: 'text' }).subscribe(data => {
      this.articleData = data;
      this.allArticles = this.setArticleList(this.articleData);
    });
   }

  ngOnInit() {
  }

  navigate(nextPage: string) {
    this.router.navigateByUrl(nextPage);

  }

  goToArticle(articleId: string) {
    this.router.navigateByUrl(`/news-article/${articleId}`);
  }

  setArticleList(rawData: string | undefined): Article[] {
    if (!rawData) {
      console.error('No article data found');
      return [];
    }
    let allSections: string[] = rawData.split('----').slice(4, -1);
    let articleArray: Article[] = [];
    let i: number = 0;
    for (i = 0; i < allSections.length; i++) {
      let title = '';
      let subtitle = '';
      let date = '';
      let content = '';
      let imageUrl = '';
      let imageAltText = '';

      const lines = allSections[i].trim().split('\n');
      let currentField = '';
      for (const line of lines) {
        if (line.startsWith('Title: ')) { title = line.substring('Title: '.length).trim(); currentField = 'title'; }
        else if (line.startsWith('Subtitle: ')) { subtitle = line.substring('Subtitle: '.length).trim(); currentField = 'subtitle'; }
        else if (line.startsWith('Date: ')) { date = line.substring('Date: '.length).trim().substring(0, 10); currentField = 'date'; }
        else if (line.startsWith('Content: ')) { content = line.substring('Content: '.length).trim(); currentField = 'content'; }
        else if (line.startsWith('Image URL: ')) { imageUrl = line.substring('Image URL: '.length).trim(); currentField = 'imageUrl'; }
        else if (line.startsWith('Image Alt Text: ')) { imageAltText = line.substring('Image Alt Text: '.length).trim(); currentField = 'imageAltText'; }
        else if (line.trim() !== '' && currentField === 'content') { content += ' ' + line.trim(); }
      }

      articleArray.push(new Article(title, subtitle, date, content, imageUrl, imageAltText));
    }

    return articleArray;
    

  }


}
