import {Component} from '@angular/core';
import {SendRequestService} from '../send-request.service';
import {Box, Contact, SendRequest} from '../backend';
import {ContactService} from '../contact.service';
import { BoxService } from '../box.service';

class NamedSendRequest implements SendRequest {

    box: string;
    dropoff_date: string;
    id: string;
    receiver: string;
    sender: string;
    size: string;
    sender_name?: string;
    selectedBox?: Box;


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
export class ConfirmationsPage {

    waitingRequests: Array<NamedSendRequest> = [];

    constructor(private sendRequestService: SendRequestService, private contactService: ContactService, private boxService: BoxService) { }

    ionViewDidEnter() {
        this.load();
    }

    private async load() {
        this.waitingRequests = await this.sendRequestService.getWaitingSendRequests();
        this.waitingRequests.forEach(async (req: NamedSendRequest) => {
            const contact = await this.contactService.getOne(req.sender);
            const box = await this.boxService.getId(req.box);
            req.selectedBox = box;
            req.sender_name = contact.name;
        });
    }

}
