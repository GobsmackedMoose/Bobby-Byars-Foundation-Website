import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
//import { NewsArticlePage } from '../news-article/news-article.page';
import { ComponentssModule } from '../componentss/componentss-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    ComponentssModule
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
