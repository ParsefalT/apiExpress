import express, { Express } from 'express';

import { userRouter } from './users/users';
import { Server} from 'node:http';

export class App {
    app: Express;
    server: Server | undefined;
    port: number;

    constructor() {
        this.app = express();
        this.port = 8001;
    }

    useRoutes() {
        this.app.use('/users', userRouter);
    }

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        console.log(`serv run on http://localhost:${this.port}`);
    }
}
