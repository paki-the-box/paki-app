import {Injectable} from '@angular/core';
import {DefaultService} from './backend';

@Injectable({
    providedIn: 'root'
})
export class BoxService {

    // private boxes = [
    //     new Box(1, 'Um die Ecke', '53.5477251', '9.9438548'),
    //     new Box(2, 'Um die andere Ecke', '53.540215', '9.9980949'),
    // ];

    constructor(private defaultService: DefaultService) {
    }

    async getAll() {
        return this.defaultService.getAllBoxesBoxesAllGet().toPromise();
    }

    async getId(id: string) {
        return this.getAll().then(boxes => boxes.find(b => b.id === id));
    }
}
