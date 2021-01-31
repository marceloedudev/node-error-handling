import HttpException from "./HttpException";

class NewNotFoundError extends HttpException {
    constructor(message: string) {
        super(message, 404, "Not Found");
    }
}

export default NewNotFoundError;
