const request = require("supertest"),
    userRouter = require("../userRouter");

describe("UserRouter testing", () => {

    it("test user registerpage", (done) => {
        request(userRouter).get("/register")
            .expect(200)
            .expect("Sign up")
        done()
    })

    it("test user loginpage", (done) => {

        request(userRouter).get("/login")
            .expect(200)
            .expect("Log in")
        done()
    })

    it("test new passwordpage", (done) => {

        request(userRouter).get("/reset")
            .expect(200)
            .expect("Send password")
        done()
    })
})