import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectWorkPageRoutingModule } from './project-work-routing.module';

import { ProjectWorkPage } from './project-work.page';
import { ComponentssModule } from '../componentss/componentss-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectWorkPageRoutingModule,
    ComponentssModule
  ],
  declarations: [ProjectWorkPage]
})
export class ProjectWorkPageModule {}
