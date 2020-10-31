import {Injectable} from '@angular/core';
import {DefaultService, SendRequest} from "./backend";
import {Observer, Subject} from "rxjs";

const KEY = "send-requests";

@Injectable({
    providedIn: 'root'
})
export class SendRequestService {
    private countObservable: Subject<number> = new Subject<number>();

    constructor(private defaultService: DefaultService) {
    }

    // requests: SendRequest[] = []
    // private countObservable = new Subject();
    //
    // constructor() {
    //     if (localStorage.getItem(KEY) == "") {
    //         localStorage.setItem(KEY, JSON.stringify([]))
    //     }
    //     console.log(localStorage.getItem(KEY))
    //     try {
    //         this.requests = JSON.parse(localStorage.getItem(KEY))
    //         if (!(this.requests instanceof Array)) {
    //             console.log("Was not an array, resetting...")
    //             this.requests = []
    //             localStorage.setItem(KEY, JSON.stringify(this.requests))
    //         }
    //     } catch (e) {
    //         this.requests = []
    //         console.log("Resetting storage")
    //         localStorage.setItem(KEY, JSON.stringify(this.requests))
    //     }
    // }
    //
    // public save(request: SendRequest) {
    //     this.requests.push(request);
    //     localStorage.setItem(KEY, JSON.stringify(this.requests))
    //     this.countObservable.next(this.requests.length)
    // }
    //
    // public async getAll() {
    //     return this.requests;
    // }
    //
    // async getOpenRequests(): Promise<number> {
    //     console.log("Returingn length " + this.requests.length)
    //     return this.requests.length;
    // }
    //
    // observeRequestCount(observer: Observer<number>) {
    //     this.countObservable.subscribe(observer)
    // }

    async save(request: SendRequest) {
        console.log("I'm about to send " + JSON.stringify(request))
        console.log(request)
        let promise = this.defaultService.newRequestRequestsNewPost(request).toPromise();
        promise.then(_ => this.defaultService.openSentRequestsForUserRequestsSentCountUserIdPost('bdd2ddf2-3b93-4c0c-b3eb-da16a389c64b').toPromise().then(count => this.countObservable.next(count)))
        return promise
    }

    observeRequestCount(observer: Observer<number>) {
        this.countObservable.subscribe(observer)
        this.defaultService.openSentRequestsForUserRequestsSentCountUserIdPost('bdd2ddf2-3b93-4c0c-b3eb-da16a389c64b').toPromise().then(count => this.countObservable.next(count))
    }

}
