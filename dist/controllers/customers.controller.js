"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersController = void 0;
const customers_1 = require("../mocks/customers");
class CustomersController {
    getAll(req, resp) {
        resp.json(customers_1.CUSTOMERS);
    }
}
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map