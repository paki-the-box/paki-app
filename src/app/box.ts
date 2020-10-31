export class Box {

    constructor(private _id: number, private _address: string, private _lat?: string, private _lng?: string) {
    }

    get id(): number {
        return this._id;
    }

    get address(): string {
        return this._address;
    }

    get lat(): string {
        return this._lat;
    }

    get lng(): string {
        return this._lng;
    }
}
