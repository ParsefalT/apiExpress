import { UserModel } from '@prisma/client';
import { UserEntity } from './user.entity';
import { IUsersRepository } from './users.repository.interface';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { PrismaService } from '../db/prisma.service';

@injectable()
export class UsersRepository implements IUsersRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async createUserRepository({ email, password, name }: UserEntity): Promise<UserModel> {
		return this.prismaService.clinet.userModel.create({
			data: {
				email,
				password,
				name,
			},
		});
	}

	async findUserRepository(email: string): Promise<UserModel | null> {
		return this.prismaService.clinet.userModel.findFirst({
			where: {
				email,
			},
		});
	}
}
