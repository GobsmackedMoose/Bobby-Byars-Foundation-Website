import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';
import { NewsArticlePage } from '../news-article/news-article.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path:':articleId',
    component: NewsArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
