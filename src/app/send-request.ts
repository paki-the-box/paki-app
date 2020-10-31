import {Box} from "./box";
import {Contact} from "./contact";

export class SendRequest {

    constructor(private contact: Contact, private selected: Box, private size: string, private deliveryDate: string) {
    }

}
