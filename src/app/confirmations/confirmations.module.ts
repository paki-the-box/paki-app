import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationsPageRoutingModule } from './confirmations-routing.module';

import { ConfirmationsPage } from './confirmations.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ConfirmationsPageRoutingModule
  ],
  declarations: [ConfirmationsPage]
})
export class ConfirmationsPageModule {}
