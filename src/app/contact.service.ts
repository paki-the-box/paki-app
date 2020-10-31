import {Injectable} from '@angular/core';
import {DefaultService} from './backend';
import {Contact} from './backend';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private defaultService: DefaultService) {
    }

    async getAll(): Promise<Contact[]> {
        return this.defaultService.getAllContactsContactsGet().toPromise();
    }

    async getOne(id: string): Promise<Contact> {
        return this.getAll().then(contacts => contacts.find(c => c.id === id));
    }
}
