import { Component, OnInit } from '@angular/core';
import { loadavg } from 'os';
import { SendRequest } from '../send-request';
import { SendRequestService } from '../send-request.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.page.html',
  styleUrls: ['./sent.page.scss'],
})
export class SentPage implements OnInit {
  requests: SendRequest[];

  constructor(private requestService: SendRequestService) { }

  ngOnInit() {
    this.load();
  }

  private async load() {
    this.requests = await this.requestService.getAll();
    console.log(this.requests);
  }

}
