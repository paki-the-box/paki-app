import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {BoxService} from '../box.service';
import {SendRequestService} from '../send-request.service';
import {Box} from '../backend';
import {Contact} from '../backend';
import {SendRequest} from '../backend';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';


@Component({
    selector: 'app-send',
    templateUrl: './send.page.html',
    styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
    private _router: Router;

    @Input('id')
    private id: string;
    contact: Contact = null;
    selected: Box = null;
    boxes: Box[] = [];
    size = 'S';
    deliveryDate: string;

    constructor(private modalCtrl: ModalController, router: Router, private contactService: ContactService,
                private boxService: BoxService, private sendRequestService: SendRequestService) {
        this._router = router;
    }

    ngOnInit() {
        this.contactService.getOne(this.id)
            .then((c) => this.contact = c)
            .then((c) =>
                Promise.all(c.favorite_boxes.map(id => this.boxService.getId(id)))
                    .then(boxes => {
                        this.boxes = boxes;
                        this.selected = boxes[0];
                    })
            );
    }

    close() {
        this.modalCtrl.dismiss({message: 'Unfinished', duration: 2000, color: 'danger'});
    }

    submit() {
        // Send to backend...
        const request: SendRequest = {
            id: UUID.UUID().toString(),
            sender: 'bdd2ddf2-3b93-4c0c-b3eb-da16a389c64b',
            receiver: this.contact.id,
            box: this.selected.id,            size: this.size,
            dropoff_date: moment(this.deliveryDate).format('YYYY-MM-DD')
        }; // new SendRequest(this.contact, this.selected, this.size, this.deliveryDate);
        this.sendRequestService.save(request);
        this.modalCtrl.dismiss({message: 'Successfully submitted!', duration: 2000, color: 'success'});
    }
}
