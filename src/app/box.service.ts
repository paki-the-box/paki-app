import { Injectable } from '@angular/core';
import {Box} from './box';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private boxes = [
      new Box(1, 'Um die Ecke', '53.5477251', '9.9438548'),
      new Box(2, 'Um die andere Ecke', '53.540215', '9.9980949'),
  ];

  constructor() { }

  async getAll() {
    return this.boxes;
  }

  async getId(id: number) {
    return this.boxes.find(b => b.id === id);
  }
}
