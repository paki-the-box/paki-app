import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxesPageRoutingModule } from './boxes-routing.module';

import { BoxesPage } from './boxes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxesPageRoutingModule
  ],
  declarations: [BoxesPage]
})
export class BoxesPageModule {}
