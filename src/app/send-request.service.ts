import { Injectable } from '@angular/core';
import {SendRequest} from "./send-request";

const KEY = "send-requests";

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  requests: SendRequest[] = []

  constructor() {
    if (localStorage.getItem(KEY) == "") {
      localStorage.setItem(KEY, JSON.stringify([]))
    }
    console.log(localStorage.getItem(KEY))
    try {
      this.requests = JSON.parse(localStorage.getItem(KEY))
      if (!(this.requests instanceof Array)) {
        console.log("Was not an array, resetting...")
        this.requests = []
        localStorage.setItem(KEY, JSON.stringify(this.requests))
      }
    } catch (e) {
      this.requests = []
      console.log("Resetting storage")
      localStorage.setItem(KEY, JSON.stringify(this.requests))
    }
  }

  public save(request: SendRequest) {
    let parsed = JSON.parse(localStorage.getItem(KEY));
    console.log("Parsed: " + parsed)
    this.requests = parsed.push(request);
    console.log("Requests after push: " + this.requests)
    let stringify = JSON.stringify(this.requests);
    console.log("Stringified: " + stringify)
    localStorage.setItem(KEY, stringify)
  }

  public async getAll() {
    return this.requests;
  }

  async getOpenRequests(): Promise<number> {
    console.log("Returingn length " + this.requests.length)
    return this.requests.length;
  }
}
