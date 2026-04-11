import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
//import { Firebase } from '../services/firebase.service';

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
    "01/01/2024",
    "This is the content of the test article. It is meant to demonstrate how an article will be displayed on the news article page.",
    "https://via.placeholder.com/150"
    ),
    new Article(
      "Test Article number 2",
      "01/01/2026",
      "This is the content of the second test article. It is meant to demonstrate how an article will be displayed on the news article page.",
      "https://via.placeholder.com/150"
    ),
    
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(nextPage: string) {
    this.router.navigateByUrl(nextPage);

  }


}
