import {Injectable} from '@angular/core';
import {SendRequest} from "./send-request";
import {Observable, Observer, Subject} from "rxjs";

const KEY = "send-requests";

@Injectable({
    providedIn: 'root'
})
export class SendRequestService {

    requests: SendRequest[] = []
    private countObservable = new Subject();

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
        this.requests.push(request);
        localStorage.setItem(KEY, JSON.stringify(this.requests))
        this.countObservable.next(this.requests.length)
    }

    public async getAll() {
        return this.requests;
    }

    async getOpenRequests(): Promise<number> {
        console.log("Returingn length " + this.requests.length)
        return this.requests.length;
    }

    observeRequestCount(observer: Observer<number>) {
        this.countObservable.subscribe(observer)
    }
}
