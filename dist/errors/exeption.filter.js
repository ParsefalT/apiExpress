"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExeptionFilter = void 0;
const http_error_class_1 = require("./http-error.class");
class ExeptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(error, req, res, next) {
        if (error instanceof http_error_class_1.HTTPError) {
            this.logger.error(`[${error.context}] Ошибка ${error.statusCode} : ${error.message}`);
            res.status(error.statusCode).send({ error: error.message });
        }
        else {
            this.logger.error(`${error.message}`);
            res.status(500).send({ error: error.message });
        }
    }
}
exports.ExeptionFilter = ExeptionFilter;
