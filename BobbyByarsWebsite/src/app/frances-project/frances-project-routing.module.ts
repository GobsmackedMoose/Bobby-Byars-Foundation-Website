import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrancesProjectPage } from './frances-project.page';

const routes: Routes = [
  {
    path: '',
    component: FrancesProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrancesProjectPageRoutingModule {}
