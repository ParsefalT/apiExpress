import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import { HTTPError } from '../errors/http-error.class';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';
@injectable()
export class UserController extends BaseController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/register', method: 'post', function: this.register },
			{ path: '/login', method: 'post', function: this.login },
		]);
	}

	login(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError(401, 'User is not auth', 'login'));
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register');
	}
}
