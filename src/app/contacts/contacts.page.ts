import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SendPage} from '../send/send.page';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";

declare var navigator: any;

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.page.html',
    styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

    contacts: Contact[] = [];

    constructor(private modalCtrl: ModalController, private contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.getAll().then(data => this.contacts = data)
    }

    delete() {

    }

    async send(id: number) {
        const modal = await this.modalCtrl.create({
            component: SendPage,
            componentProps: {
                id: id
            }
        });
        return await modal.present();
    }

    pick() {
        navigator.contacts.pickContact((contact) => {
            console.log('The following contact has been selected:' + JSON.stringify(contact));
            alert(JSON.stringify(contact));
        }, (err) => {
            console.log('Error: ' + err);
        });
    }

}
