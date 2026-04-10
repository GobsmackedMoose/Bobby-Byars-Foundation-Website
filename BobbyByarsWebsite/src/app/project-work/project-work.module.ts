import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectWorkPageRoutingModule } from './project-work-routing.module';

import { ProjectWorkPage } from './project-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectWorkPageRoutingModule
  ],
  declarations: [ProjectWorkPage]
})
export class ProjectWorkPageModule {}
