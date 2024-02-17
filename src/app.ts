import { UserController } from './users/users.controller';
import express, { Express } from 'express';

import { Server} from 'node:http';
import { LoggerService } from './logger/logger.service';
import { ExeptionFilter } from './errors/exeption.filter';
import { ILogger } from './logger/logger.interface';

export class App {
    app: Express;
    server: Server | undefined;
    port: number;
    logger: ILogger;
    userController: UserController;
    exeptionFilter : ExeptionFilter;

    constructor(logger: ILogger, userController: UserController, exeptionFilter: ExeptionFilter) {
        this.app = express();
        this.port = 8001;
        this.logger = logger;
        this.userController = userController;
        this.exeptionFilter = exeptionFilter;
    }

    useRoutes() {
        this.app.use('/users', this.userController.router);
    }

    useExeptionFilters() {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
    }

    public async init() {
        this.useRoutes();
        this.useExeptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`serv run on http://localhost:${this.port}`);
    }
}
