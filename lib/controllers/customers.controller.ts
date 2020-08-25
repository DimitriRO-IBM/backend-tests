import { Request, Response } from "express";
import { CUSTOMERS } from '../mocks/customers';

export class CustomersController {
    public getAll(req: Request, resp: Response) {
        resp.json(CUSTOMERS);
    }
}
