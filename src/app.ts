import "express-async-errors";

import * as Yup from "yup";

import {
    ErrorMiddleware,
    RouteErrorNotFound,
} from "@/middleware/ErrorMiddleware";

import NewInternalServerError from "@/exceptions/NewInternalServerError";
import Validate from "@/validators/Validate";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(express.json())
    .use(morgan("dev"))
    .use(cors())
    .use(helmet())
    .use(compression());

app.get("/", (req, res) => {
    res.json({
        ok: true,
    });
});

app.post("/status", async (req, res) => {
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
    });
    const validationError: Array<string> = await Validate(schema, req.body);

    if (validationError) {
        throw new NewInternalServerError(
            "There was a problem with validation",
            validationError
        );
    }

    res.json({
        ok: true,
    });
});

app.use(RouteErrorNotFound);
app.use(ErrorMiddleware);

export default app;
