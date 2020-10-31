import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationsPage } from './confirmations.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationsPageRoutingModule {}
