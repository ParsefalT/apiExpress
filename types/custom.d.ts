declare namespace Express {
	export interface Request {
		user: string | undefined | JwtPayload;
	}
}
