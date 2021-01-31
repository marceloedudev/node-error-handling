import app from "../src/app";
import request from "supertest";

describe("POST /status", () => {
    it("should be able to return the data", async () => {
        const response = await request(app).post("/status").send({
            name: "Marcelo",
            email: "example@gmail.com",
        });

        expect(response.status).toEqual(200);
    });

    it("should be able to show the 'causes' field", async () => {
        const response = await request(app).post("/status").send({
            name: "Marcelo",
            email2: "example@gmail.com",
        });

        expect(response.body).toHaveProperty("causes");
    });

    it("should not be able to with just the name field", async () => {
        const response = await request(app).post("/status").send({
            name: "Marcelo",
        });

        expect(response.status).toEqual(500);
    });
});
