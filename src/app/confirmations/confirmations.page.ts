import {Component, OnInit} from '@angular/core';
import {SendRequestService} from "../send-request.service";
import {Contact, SendRequest} from "../backend";
import {ContactService} from "../contact.service";

class NamedSendRequest implements SendRequest {

    box: string;
    dropoff_date: string;
    id: string;
    receiver: string;
    sender: string;
    size: string;
    sender_name?: string


    constructor(box: string, dropoff_date: string, id: string, receiver: string, sender: string, size: string, sender_name: string) {
        this.box = box;
        this.dropoff_date = dropoff_date;
        this.id = id;
        this.receiver = receiver;
        this.sender = sender;
        this.size = size;
        this.sender_name = sender_name;
    }
}

@Component({
    selector: 'app-confirmations',
    templateUrl: './confirmations.page.html',
    styleUrls: ['./confirmations.page.scss'],
})
export class ConfirmationsPage implements OnInit {

    private waitingRequests: Array<NamedSendRequest> = []

    constructor(private sendRequestService: SendRequestService, private contactService: ContactService) {
        sendRequestService.getWaitingSendRequests()
            .then(requests => this.waitingRequests = requests)
        // .then(requests => requests.map((req: NamedSendRequest) => contactService.getOne(req.id).then(c => {
        //     req.sender_name = c.name;
        //     return req
        // })));
    }

    ngOnInit() {
    }

}
