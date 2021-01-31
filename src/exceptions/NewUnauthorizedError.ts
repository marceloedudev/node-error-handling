import HttpException from "./HttpException";

class NewUnauthorizedError extends HttpException {
    constructor(message: string, causes?: Array<string>) {
        super(message, 401, "Unauthorized", causes);
    }
}

export default NewUnauthorizedError;
