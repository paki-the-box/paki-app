import { Injectable } from '@angular/core';
import {Box} from "./box";

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private boxes = [
      new Box(1, "Um die Ecke", 'https://ca.slack-edge.com/T01BWJSLH9V-U01DL19HR6H-g799b8ba68f5-512', '53.5477251', '9.9438548'),
      new Box(2, "Um die andere Ecke", undefined, '53.540215', '9.9980949'),
  ]

  constructor() { }

  async getAll() {
    return this.boxes;
  }

  async getId(id: number) {
    return this.boxes.find(b => b.id === id);
  }
}
