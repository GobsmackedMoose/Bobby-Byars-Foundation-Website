import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
<<<<<<< HEAD
import { FooterComponent } from '../components/footer/footer.component';
=======
//import { NewsArticlePage } from '../news-article/news-article.page';

>>>>>>> f7d2629733c7094b353ed3b53f7e47633deb8492

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
