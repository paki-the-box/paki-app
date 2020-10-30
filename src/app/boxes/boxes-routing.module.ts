import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxesPage } from './boxes.page';

const routes: Routes = [
  {
    path: '',
    component: BoxesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxesPageRoutingModule {}
