"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const customers_controller_1 = require("../controllers/customers.controller");
const nodes_controller_1 = require("../controllers/nodes.controller");
class Routes {
    constructor() {
        this.nodesController = new nodes_controller_1.NodesController();
        this.customersController = new customers_controller_1.CustomersController();
    }
    routes(app) {
        app.route("/").get(this.nodesController.index);
        app.route("/nodes").get(this.nodesController.index);
        app.route("/customers").get(this.customersController.getAll);
        app.route("/customers/:id").get(this.customersController.getById);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map