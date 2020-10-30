import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendPage } from '../send/send.page';

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

}
