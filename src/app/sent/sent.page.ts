import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.page.html',
  styleUrls: ['./sent.page.scss'],
})
export class SentPage implements OnInit {
  requests = [];

  constructor() { }

  ngOnInit() {
    this.load();
  }

  private async load() {
  }

}
