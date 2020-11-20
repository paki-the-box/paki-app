import {Injectable} from '@angular/core';
import {DefaultService, SendRequest} from './backend';
import {Observer, Subject, timer} from 'rxjs';

const KEY = 'send-requests';

@Injectable({
    providedIn: 'root'
})
export class SendRequestService {
    private countObservable: Subject<number> = new Subject<number>();
    private openRequestsObservable: Subject<number> = new Subject<number>();

    constructor(private defaultService: DefaultService) {
        timer(1000, 1000)
        .subscribe(_ => defaultService.getOpenRequestsRequestsUserIdGet('bdd2ddf2-3b93-4c0c-b3eb-da16a389c64b')
        .subscribe(list => this.openRequestsObservable.next(list.length)));
    }

    async save(request: SendRequest) {
        console.log('I\'m about to send ' + JSON.stringify(request));
        console.log(request);

        // TODO I don't get it
        const promise = this.defaultService.newRequestRequestsNewPost(request).toPromise();
        promise.then(_ => this.defaultService.openSentRequestsForUserRequestsSentCountUserIdPost('bdd2ddf2-3b93-4c0c-b3eb-da16a389c64b')
        .toPromise().then(count => this.countObservable.next(count)));
        return promise;
    }

    async getWaitingSendRequests(): Promise<Array<SendRequest>> {
        return this.defaultService.getOpenRequestsRequestsUserIdGet('bdd2ddf2-3b93-4c0c-b3eb-da16a389c64b').toPromise();
    }

    observeRequestCount(observer: Observer<number>) {
        this.countObservable.subscribe(observer);
        this.defaultService.openSentRequestsForUserRequestsSentCountUserIdPost('bdd2ddf2-3b93-4c0c-b3eb-da16a389c64b').toPromise()
        .then(count => this.countObservable.next(count));
    }

    observeWaitingRequests(observer: Observer<number>) {
        this.openRequestsObservable.subscribe(observer);
    }

}
