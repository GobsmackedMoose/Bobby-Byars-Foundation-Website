import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProgramsPopoverComponent } from './components/programs-popover/programs-popover.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, ProgramsPopoverComponent, FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
=======
  declarations: [AppComponent, ProgramsPopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
>>>>>>> f7d2629733c7094b353ed3b53f7e47633deb8492
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
   constructor(
    private router: Router,
  ) { }


navigate(nextPage: string) {
    this.router.navigateByUrl(nextPage);

  }
}
