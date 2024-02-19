import { PrismaClient, UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';

@injectable()
export class PrismaService {
	clinet: PrismaClient;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.clinet = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.clinet.$connect();
			this.logger.log('[PrismaService] успешно подключились к бд');
		} catch (err) {
			if (err instanceof Error) {
				this.logger.error('[PrismaService] ошибка подключение к бд' + err.message);
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.clinet.$disconnect();
	}
}
