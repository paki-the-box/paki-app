import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxesPageRoutingModule } from './boxes-routing.module';

import { BoxesPage } from './boxes.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BoxesPageRoutingModule
  ],
  declarations: [BoxesPage]
})
export class BoxesPageModule {}
