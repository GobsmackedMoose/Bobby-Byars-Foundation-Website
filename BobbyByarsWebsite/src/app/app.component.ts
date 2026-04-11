import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ProgramsPopoverComponent } from './components/programs-popover/programs-popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private popoverController: PopoverController, private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
  
  
  async openProgramsMenu(event: Event) {
    const popover = await this.popoverController.create({
      component: ProgramsPopoverComponent,
      event: event,
      translucent: true,
    });
    await popover.present();
    console.log("programs menu opened");
  }
}

