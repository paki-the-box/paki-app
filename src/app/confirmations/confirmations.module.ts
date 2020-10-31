import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationsPageRoutingModule } from './confirmations-routing.module';

import { ConfirmationsPage } from './confirmations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationsPageRoutingModule
  ],
  declarations: [ConfirmationsPage]
})
export class ConfirmationsPageModule {}
