import {Component, Input, OnInit} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {Router} from "@angular/router";
import {ContactService} from "../contact.service";
import {Contact} from '../contact';
import {BoxService} from "../box.service";
import {Box} from "../box";
import {SendRequest} from "../send-request";
import { SendRequestService } from '../send-request.service';

@Component({
    selector: 'app-send',
    templateUrl: './send.page.html',
    styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
    private _router: Router;

    @Input("id")
    private id: number
    contact: Contact = null;
    selected: Box = null;
    boxes: Box[] = []
    size: string;
    deliveryDate: string;

    constructor(private modalCtrl: ModalController, router: Router, private contactService: ContactService,
                private boxService: BoxService, private sendRequestService: SendRequestService) {
        this._router = router;
    }

    ngOnInit() {
        this.contactService.getOne(this.id)
            .then((c) => this.contact = c)
            .then((c) =>
                Promise.all(c.boxes.map(id => this.boxService.getId(id)))
                    .then(boxes => {
                        this.boxes = boxes
                        this.selected = boxes[0]
                    })
            )
    }

    close() {
        this.modalCtrl.dismiss({message: "Unfinished", duration: 2000, color: "danger"});
    }

    submit() {
        // Send to backend...
        let request = new SendRequest(this.contact, this.selected, this.size, this.deliveryDate);
        this.sendRequestService.save(request)
        this.modalCtrl.dismiss({message: "Successfully submitted!", duration: 2000, color: "success"});
    }
}
