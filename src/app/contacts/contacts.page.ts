import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendPage } from '../send/send.page';

declare var navigator: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  delete() {

  }

  async send() {
    const modal = await this.modalCtrl.create({
      component: SendPage,
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
