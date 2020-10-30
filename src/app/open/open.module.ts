import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenPageRoutingModule } from './open-routing.module';

import { OpenPage } from './open.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenPageRoutingModule
  ],
  providers: [
    QRScanner
  ],
  declarations: [OpenPage]
})
export class OpenPageModule {}
