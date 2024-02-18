import { NextFunction, Request, Response } from 'express';
import { LoggerService } from '../logger/logger.service';
import { IExeptionFilter } from './exeption.filter.interface';
import { HTTPError } from './http-error.class';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
@injectable()
export class ExeptionFilter implements IExeptionFilter {
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {}

	catch(error: Error | HTTPError, req: Request, res: Response, next: NextFunction) {
		if (error instanceof HTTPError) {
			this.logger.error(`[${error.context}] Ошибка ${error.statusCode} : ${error.message}`);
			res.status(error.statusCode).send({ error: error.message });
		} else {
			this.logger.error(`${error.message}`);
			res.status(500).send({ error: error.message });
		}
	}
}
