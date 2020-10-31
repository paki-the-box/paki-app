import { Component, OnInit } from '@angular/core';
import { SendRequestService } from '../send-request.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.page.html',
  styleUrls: ['./sent.page.scss'],
})
export class SentPage implements OnInit {

  constructor(private requestService: SendRequestService) { }

  ngOnInit() {
    this.load();
  }

  private async load() {
  }

}
