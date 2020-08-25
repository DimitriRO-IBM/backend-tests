import { mongoObjectId } from '../utils';

export class Customer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this._id = mongoObjectId();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
