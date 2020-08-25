import { Request, Response } from "express";
import { CUSTOMERS } from '../mocks/customers';

export class CustomersController {
    public getAll(req: Request, resp: Response): void {
        resp.json(CUSTOMERS);
    }

    public getById(req: Request, resp: Response): void {
        const { id } = req.params;
        resp.json(CUSTOMERS.find(cust => cust._id === id));
    }
}
