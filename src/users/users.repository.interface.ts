import { UserModel } from '@prisma/client';
import { UserEntity } from './user.entity';

export interface IUsersRepository {
	createUserRepository: (user: UserEntity) => Promise<UserModel>;
	findUserRepository: (email: string) => Promise<UserModel | null>;
}
