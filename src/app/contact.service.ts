import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private contacts = [
        new Contact(1, 'Julian Feinauer', 'https://ca.slack-edge.com/T01BWJSLH9V-U01DL19HR6H-g799b8ba68f5-512', [1, 2]),
        new Contact(2, 'Niklas Merz', 'https://ca.slack-edge.com/T01BWJSLH9V-U01DGBU5TE2-9c36519a20c7-512', [1]),
        new Contact(3, 'Björn Höper', undefined, [1, 2]),
        new Contact(4, 'Simon Mayer'),
        new Contact(5, 'Andreas Schulz'),
        new Contact(6, 'Moritz Bernhardt'),
        new Contact(7, 'Tim Mitsch'),
    ];

    constructor() {
    }

    async getAll(): Promise<Contact[]> {
        return this.contacts;
    }

    async getOne(id: number): Promise<Contact> {
        return this.contacts.find(c => c.id === id);
    }
}
