import {Injectable} from '@angular/core';
import {DefaultService} from './backend';

@Injectable({
    providedIn: 'root'
})
export class BoxService {

    constructor(private defaultService: DefaultService) {
    }

    async getAll() {
        return this.defaultService.getAllBoxesBoxesAllGet().toPromise();
    }

    async getId(id: string) {
        return this.getAll().then(boxes => boxes.find(b => b.id === id));
    }
}
