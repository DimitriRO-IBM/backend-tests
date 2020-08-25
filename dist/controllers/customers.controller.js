"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersController = void 0;
const customers_1 = require("../mocks/customers");
class CustomersController {
    getAll(req, resp) {
        resp.json(customers_1.CUSTOMERS);
    }
    getById(req, resp) {
        const { id } = req.params;
        resp.json(customers_1.CUSTOMERS.find(cust => cust._id === id));
    }
}
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map