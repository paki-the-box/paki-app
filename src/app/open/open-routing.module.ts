import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenPage } from './open.page';

const routes: Routes = [
  {
    path: '',
    component: OpenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenPageRoutingModule {}
