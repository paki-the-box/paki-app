import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContactPage } from './add-contact.page';

const routes: Routes = [
  {
    path: '',
    component: AddContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddContactPageRoutingModule {}
