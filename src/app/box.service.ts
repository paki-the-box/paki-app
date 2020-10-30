import { Injectable } from '@angular/core';
import {Box} from "./box";

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private boxes = [
      new Box(1, "Um die Ecke", 'https://ca.slack-edge.com/T01BWJSLH9V-U01DL19HR6H-g799b8ba68f5-512'),
      new Box(2, "Um die andere Ecke"),
  ]

  constructor() { }

  async getAll() {
    return this.boxes;
  }

  async getId(id: number) {
    console.log("Find Box" + id)
    return this.boxes.find(b => b.id == id);
  }
}
