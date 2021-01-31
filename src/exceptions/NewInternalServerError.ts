import HttpException from "./HttpException";

class NewInternalServerError extends HttpException {
    constructor(message: string, causes?: Array<string>) {
        super(message, 500, "Internal Server Error", causes);
    }
}

export default NewInternalServerError;
