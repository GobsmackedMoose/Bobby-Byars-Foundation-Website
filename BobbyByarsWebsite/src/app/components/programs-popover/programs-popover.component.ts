import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs-popover',
  templateUrl: './programs-popover.component.html',
  styleUrls: ['./programs-popover.component.scss'],
  standalone: false,
})
export class ProgramsPopoverComponent  implements OnInit {

  constructor(private popoverCtrl: PopoverController, private router: Router) { }

  ngOnInit() {}

  buttonClicked(url: string) {
    this.popoverCtrl.dismiss();
    this.navigate(url);
  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
  }

}
