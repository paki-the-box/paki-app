import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacketsPage } from './packets.page';

const routes: Routes = [
  {
    path: '',
    component: PacketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacketsPageRoutingModule {}
