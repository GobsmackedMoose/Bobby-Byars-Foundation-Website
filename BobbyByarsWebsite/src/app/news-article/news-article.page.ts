import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.page.html',
  styleUrls: ['./news-article.page.scss'],
  standalone: false
})
export class NewsArticlePage implements OnInit {

  // Hardcoded test articles used for development/preview purposes before real data loads
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


  articleData: string | undefined // raw text content of articles.txt, populated after HTTP fetch
  allArticles: Article[] = []     // parsed list of all articles from articles.txt
  article: Article | undefined;   // the single article to display on this page, matched by URL slug

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    // Fetch articles.txt from the assets folder. The subscribe callback runs asynchronously
    // once the file loads, so all dependent logic (parsing, slug matching) lives inside it.
    this.http.get('/assets/articles.txt', { responseType: 'text' }).subscribe(data => {
      this.articleData = data;
      this.allArticles = this.setArticleList(this.articleData);

      // Read the articleId from the URL (e.g. /news/my-article-title) and find the matching article
      const slug = this.route.snapshot.paramMap.get('articleId');
      this.article = this.allArticles.find(article => article.slug === slug);
    });
  }

  async ngOnInit() {

  }

  // Parses the raw text from articles.txt into an array of Article objects.
  // articles.txt uses "----" as a section delimiter. slice(4, -1) skips the file header,
  // template, and "ALL POSTS:" marker, leaving only the actual article sections.
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

      // Split the section into individual lines and parse each field by its label prefix.
      // currentField tracks which field was last matched so that continuation lines
      // (lines without a label) can be appended to the correct field — primarily used
      // to support multi-line Content entries.
      const lines = allSections[i].trim().split('\n');
      let currentField = '';
      for (const line of lines) {
        if (line.startsWith('Title: ')) { title = line.substring('Title: '.length).trim(); currentField = 'title'; }
        else if (line.startsWith('Subtitle: ')) { subtitle = line.substring('Subtitle: '.length).trim(); currentField = 'subtitle'; }
        else if (line.startsWith('Date: ')) { date = line.substring('Date: '.length).trim().substring(0, 10); currentField = 'date'; }
        else if (line.startsWith('Content: ')) { content = line.substring('Content: '.length).trim(); currentField = 'content'; }
        else if (line.startsWith('Image URL: ')) { imageUrl = line.substring('Image URL: '.length).trim(); currentField = 'imageUrl'; }
        else if (line.startsWith('Image Alt Text: ')) { imageAltText = line.substring('Image Alt Text: '.length).trim(); currentField = 'imageAltText'; }
        else if (line.trim() !== '' && currentField === 'content') { content += ' ' + line.trim(); } // continuation line
      }

      articleArray.push(new Article(title, subtitle, date, content, imageUrl, imageAltText));
    }

    return articleArray;


  }

}
