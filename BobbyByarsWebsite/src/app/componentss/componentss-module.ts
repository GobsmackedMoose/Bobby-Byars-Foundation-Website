import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { IonicModule } from '@ionic/angular';

// this is for footer. I know the name is bad but dont deete pls. 
//meant to manage components. its a module 

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    IonicModule

  ],
  exports: [FooterComponent]
})
export class ComponentssModule { }
