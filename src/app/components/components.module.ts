import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HereMapComponent } from './here-map/here-map.component';



@NgModule({
  declarations: [HereMapComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HereMapComponent
  ]
})
export class ComponentsModule { }
