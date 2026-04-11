import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.page.html',
  styleUrls: ['./news-article.page.scss'],
  standalone: false
})
export class NewsArticlePage implements OnInit {

  allArticlesTest: Article[] = [new Article(
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
  )];

  allArticles: Article[] = this.allArticlesTest;
  article: Article | undefined;

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('articleId');
    this.article = this.allArticles.find(article => article.slug === slug);
  }

}
