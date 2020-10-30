import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from "@angular/router";
import {ContactService} from "../contact.service";
import {Contact} from '../contact';
import {BoxService} from "../box.service";
import {Box} from "../box";

@Component({
    selector: 'app-send',
    templateUrl: './send.page.html',
    styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
    private _router: Router;

    @Input("id")
    private id: number
    private contact: Contact;
    selected: Box = null;
    boxes: Box[] = []

    constructor(private modalCtrl: ModalController, router: Router, private contactService: ContactService, private boxService: BoxService) {
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
        this.modalCtrl.dismiss();
    }

    segmentChanged(event: any) {

    }
}
