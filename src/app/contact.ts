import {Box} from "./box";

export class Contact {

    constructor(private _id: Number, private _name: String, private _picture?: string, private _boxes?: number[]) {
    }

    get id(): Number {
        return this._id;
    }

    get name(): String {
        return this._name;
    }

    get picture(): string {
        return this._picture;
    }


    get boxes(): number[] {
        return this._boxes;
    }
}
