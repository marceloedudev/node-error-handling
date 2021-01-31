import HttpException from "./HttpException";

class NewTooManyRequestsError extends HttpException {
    constructor(message: string, causes?: Array<string>) {
        super(message, 429, "Too Many Requests", causes);
    }
}

export default NewTooManyRequestsError;
