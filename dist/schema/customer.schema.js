"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const utils_1 = require("../utils");
class Customer {
    constructor(firstName, lastName, email) {
        this._id = utils_1.mongoObjectId();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.schema.js.map