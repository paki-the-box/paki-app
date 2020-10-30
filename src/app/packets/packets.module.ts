import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacketsPageRoutingModule } from './packets-routing.module';

import { PacketsPage } from './packets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacketsPageRoutingModule
  ],
  declarations: [PacketsPage]
})
export class PacketsPageModule {}
