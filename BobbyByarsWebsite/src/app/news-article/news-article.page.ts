import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
//import { Firebase }

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.page.html',
  styleUrls: ['./news-article.page.scss'],
  standalone: false
})
export class NewsArticlePage implements OnInit {

  testArticle: Article = new Article(
    "Test Article Title",
    "01/01/2024",
    "This is the content of the test article. It is meant to demonstrate how an article will be displayed on the news article page.",
    "https://via.placeholder.com/150"
  );

  testArticle2: Article = new Article(
    "Test Article number 2",
    "01/01/2026",
    "This is the content of the second test article. It is meant to demonstrate how an article will be displayed on the news article page.",
    "https://via.placeholder.com/150"
  );

  constructor(private article: Article) {
    
  }

  ngOnInit() {
  }

}
