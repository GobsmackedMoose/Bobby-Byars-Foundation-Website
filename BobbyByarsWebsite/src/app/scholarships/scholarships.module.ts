import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScholarshipsPageRoutingModule } from './scholarships-routing.module';

import { ScholarshipsPage } from './scholarships.page';
import { ComponentssModule } from '../componentss/componentss-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScholarshipsPageRoutingModule,
    ComponentssModule
  ],
  declarations: [ScholarshipsPage]
})
export class ScholarshipsPageModule {}
