import { Request, Response, NextFunction } from 'express';
import { IMiddleWare } from './moddleware.interface';
import { verify } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddleWare {
	constructor(private secret: string) {}
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			// BearerJWT
			verify(req.headers.authorization.split(' ')[1], this.secret, (error, payload) => {
				if (error) {
					console.log(error.message);
					next();
				} else {
					req.user = payload;
					next();
				}
			});
		} else {
			next();
		}
	}
}
