import { Injectable } from '@angular/core';
import {SendRequest} from "./send-request";

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  requests: SendRequest[] = []

  constructor() { }

  public save(request: SendRequest) {
    console.log("Storing " + request)
    console.log("Size: " + this.requests.length)
    this.requests.push(request)
    console.log("Size: " + this.requests.length)
  }

  public async getAll() {
    return this.requests;
  }

  async getOpenRequests(): Promise<number> {
    console.log("Returingn length " + this.requests.length)
    return this.requests.length;
  }
}
