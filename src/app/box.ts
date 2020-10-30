export class Box {

    constructor(private _id: number, private _address: string, private _image?: string) {
    }

    get id(): number {
        return this._id;
    }

    get address(): string {
        return this._address;
    }

    get image(): string {
        return this._image;
    }
}
