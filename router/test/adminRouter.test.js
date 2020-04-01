const request = require("supertest"),
    productRouter = require("../adminRouter");

describe("AdminRouter testing", () => {

    it("test admin startpage", (done) => {

        request(productRouter).get("/admin")
            .expect(200)
            .expect("Welcome fine admin!")
        done()
    })

    it("test admin loginpage", (done) => {

        request(productRouter).get("/admin/adminlogin")
            .expect(200)
            .expect("Login")
        done()

    })

    it("test admin editpage", (done) => {

        request(productRouter).get("/admin/createproduct")
            .expect(200)
            .expect("create")
        done()

    })

    it("test admin registerpage", (done) => {

        request(productRouter).get("/admin/registeradmin")
            .expect(200)
            .expect("Register")
        done()

    })

})