import {Injectable} from '@angular/core';
import {Contact} from "./contact";
import {throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private contacts = [
        new Contact(1, 'Julian Feinauer', 'https://ca.slack-edge.com/T01BWJSLH9V-U01DL19HR6H-g799b8ba68f5-512', [1, 2]),
        new Contact(2, 'Niklas Merz', 'https://ca.slack-edge.com/T01BWJSLH9V-U01DGBU5TE2-9c36519a20c7-512'),
        new Contact(3, 'Björn Höper'),
        new Contact(4, 'Simon Mayer', null),
    ];

    constructor() {
    }

    async getAll(): Promise<Contact[]> {
        return this.contacts;
    }

    async getOne(id: number): Promise<Contact> {
        return this.contacts.find(c => c.id == id)
    }
}
