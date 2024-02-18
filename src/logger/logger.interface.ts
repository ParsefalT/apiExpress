import { Logger, ILogObj } from 'tslog';

export interface ILogger {
	router(arg0: string): unknown;
	logger: Logger<ILogObj>;
	log: (...args: unknown[]) => void;
	warn: (...args: unknown[]) => void;
	error: (...args: unknown[]) => void;
}
