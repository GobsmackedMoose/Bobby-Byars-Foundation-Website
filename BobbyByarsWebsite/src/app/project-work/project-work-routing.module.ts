import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectWorkPage } from './project-work.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectWorkPageRoutingModule {}
