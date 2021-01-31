import HttpException from "./HttpException";

class NewNotAcceptableError extends HttpException {
    constructor(message: string, causes?: Array<string>) {
        super(message, 406, "Not Acceptable", causes);
    }
}

export default NewNotAcceptableError;
