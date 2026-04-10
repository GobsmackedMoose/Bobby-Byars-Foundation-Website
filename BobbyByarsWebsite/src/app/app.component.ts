import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProgramsPopoverComponent } from './programs-popover/programs-popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private popoverController: PopoverController) {}
  
  
  async openProgramsMenu() {
    const popover = await this.popoverController.create({
      component: ProgramsPopoverComponent,
      translucent: true,
    });
    await popover.present();
    console.log("programs menu opened");
  }
}

