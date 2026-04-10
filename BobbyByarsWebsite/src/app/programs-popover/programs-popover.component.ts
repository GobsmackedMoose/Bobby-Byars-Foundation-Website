import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-programs-popover',
  templateUrl: './programs-popover.component.html',
  styleUrls: ['./programs-popover.component.scss'],
  standalone: false,
})
export class ProgramsPopoverComponent  implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

}
