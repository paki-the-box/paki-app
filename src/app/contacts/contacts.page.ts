import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {SendPage} from '../send/send.page';
import {Contact} from '../backend';
import {ContactService} from '../contact.service';

declare var navigator: any;

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.page.html',
    styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

    contacts: Contact[] = [];

    constructor(private modalCtrl: ModalController, private contactService: ContactService, private toastController: ToastController) {
    }

    ngOnInit() {
        this.contactService.getAll().then(data => this.contacts = data);
    }

    delete() {

    }

    async send(id: number) {
        const modal = await this.modalCtrl.create({
            component: SendPage,
            componentProps: {
                id
            }
        });
        modal.onDidDismiss().then(event => {
            this.toastController.create(event.data).then(toast => toast.present());
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
