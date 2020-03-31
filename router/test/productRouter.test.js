const request = require("supertest"),
productRouter = require("../productRouter");

//https://jestjs.io/docs/uk/next/expect
//https://www.npmjs.com/package/supertest


describe("ProductRouter testing", ()=>{
    
    it("test product startpage", (done)=>{
      
        request(productRouter).get("/")
        .expect(200)
        .expect("CHOCC")
        done()
    })
    
    
    it("testing productdetail page", (done)=>{
      
        request(productRouter).get("/product")
        .expect(200)
        .expect("Book Apartment")
        done()
    
    })

    it("test productcart", (done)=>{
      
        request(productRouter).get("/cart")
        .expect(200)
        done()

    })

    it("test checkoutpage", (done)=>{
      
    request(productRouter).get("/checkout")
    .expect(200)
    done()

    })


})