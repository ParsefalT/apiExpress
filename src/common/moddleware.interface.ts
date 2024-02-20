import { NextFunction, Request, Response } from 'express';

export class IMiddleWare {
	execute(req: Request, res: Response, next: NextFunction): void {}
}
