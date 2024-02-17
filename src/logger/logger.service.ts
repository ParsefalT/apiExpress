import { Logger, ILogObj } from 'tslog';
import { ILogger } from './logger.interface';

export class LoggerService implements ILogger {
    public logger: Logger<ILogObj>;

    constructor() {
        this.logger = new Logger({
            prettyLogTemplate: "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t[{{filePathWithLine}}{{name}}]\t",
            prettyErrorTemplate: "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
            prettyErrorStackTemplate: "  • {{fileName}}\t{{method}}\n\t{{filePathWithLine}}",
            prettyErrorParentNamesSeparator: ":",
            prettyErrorLoggerNameDelimiter: "\t",
            stylePrettyLogs: true,
            prettyLogTimeZone: "UTC",
            prettyLogStyles: {
                logLevelName: {
                "*": ["bold", "black", "bgWhiteBright", "dim"],
                SILLY: ["bold", "white"],
                TRACE: ["bold", "whiteBright"],
                DEBUG: ["bold", "green"],
                INFO: ["bold", "blue"],
                WARN: ["bold", "yellow"],
                ERROR: ["bold", "red"],
                FATAL: ["bold", "redBright"],
                },
                dateIsoStr: "white",
                filePathWithLine: "white",
                name: ["white", "bold"],
                nameWithDelimiterPrefix: ["white", "bold"],
                nameWithDelimiterSuffix: ["white", "bold"],
                errorName: ["bold", "bgRedBright", "whiteBright"],
                fileName: ["yellow"],
                // fileNameWithLine: "white",
            },
        })
    }

    log(...args: unknown[]) {
        this.logger.info(...args)
    }
    warn(...args: unknown[]) {
        this.logger.warn(...args)
    }
    error(...args: unknown[]) {
        this.logger.error(...args)
    }
}