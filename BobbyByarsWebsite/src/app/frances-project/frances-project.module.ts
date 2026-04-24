import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrancesProjectPageRoutingModule } from './frances-project-routing.module';

import { FrancesProjectPage } from './frances-project.page';
import { FooterComponent } from '../components/footer/footer.component';
import { ComponentssModule } from '../componentss/componentss-module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrancesProjectPageRoutingModule,
    ComponentssModule
    
  ],
  declarations: [FrancesProjectPage]
})
export class FrancesProjectPageModule {}
