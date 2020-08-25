import { CustomersController } from '../controllers/customers.controller';
import { NodesController } from "../controllers/nodes.controller";

export class Routes {
    public nodesController: NodesController = new NodesController();
    public customersController: CustomersController = new CustomersController();

    public routes(app): void {
        app.route("/").get(this.nodesController.index);

        app.route("/nodes").get(this.nodesController.index);

        app.route("/customers").get(this.customersController.getAll);

        app.route("/customers/:id").get(this.customersController.getById);
    }
}
