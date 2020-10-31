import {Box} from "./box";
import {Contact} from "./contact";

export class SendRequest {

    constructor(public contact: Contact, public selected: Box, public size: string, public deliveryDate: string) {
    }

}
