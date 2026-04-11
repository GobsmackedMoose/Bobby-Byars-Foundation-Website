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
    "Test Article Subtitle",
    "01/01/2024",
    "This is the content of the test article. It is meant to demonstrate how an article will be displayed on the news article page.",
    "https://via.placeholder.com/150",
    "Placeholder image for test article"
    ),
    new Article(
      "Test Article number 2",
      "Test Article Subtitle number 2",
      "01/01/2026",
      "This is the content of the second test article. It is meant to demonstrate how an article will be displayed on the news article page.",
      "https://via.placeholder.com/150",
      "Placeholder image for second test article"
    ),
    
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(nextPage: string) {
    this.router.navigateByUrl(nextPage);

  }

  goToArticle(articleId: string) {
    //this.router.navigateByUrl(`/events/${articleId}`);
    this.navigate(articleId);
  }


}
