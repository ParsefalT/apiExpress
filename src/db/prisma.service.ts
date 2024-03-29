import { PrismaClient, UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			this.logger.log('[PrismaService] успешно подключились к бд');
		} catch (err) {
			if (err instanceof Error) {
				this.logger.error('[PrismaService] ошибка подключение к бд' + err.message);
			}
		}
		await this.client.$connect();
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
	}
}
