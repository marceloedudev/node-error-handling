import { NextFunction, Request, Response } from "express";

import HttpException from "@/exceptions/HttpException";
import NewNotFoundError from "@/exceptions/NewNotFoundError";

const RouteErrorNotFound = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    throw new NewNotFoundError(`Route '${req.path}' was not found`);
};

const ErrorMiddleware = (
    err: HttpException | any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof HttpException) {
        return res.status(err.status).json({
            ...err,
            path: req.path,
        });
    }

    if (err.message) {
        return res.status(400).json({
            message: err.message,
            status: 400,
            error: "Bad Request",
            causes: null,
            timestamp: new Date(),
            path: req.path,
        });
    }

    return res.status(500).json({
        message: "Internal server error",
        status: 500,
        error: "Internal Server Error",
        causes: null,
        timestamp: new Date(),
        path: req.path,
    });
};

export { RouteErrorNotFound, ErrorMiddleware };
