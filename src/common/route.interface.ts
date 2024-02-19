import { NextFunction, Request, Response, Router } from 'express';
import { IMiddleWare } from './moddleware.interface';

export interface IControllerRoute {
	path: string;
	function: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
	middlewares?: IMiddleWare[];
}

// export type ExpressReturType = Response<any, Record<sctring, any>>;
