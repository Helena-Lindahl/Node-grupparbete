describe("Admin functions", function () {

    it("test login function", function () {
        cy.visit("http://localhost:8000/admin/loginadmin")
        cy.title().should("eq", "Node.js")
        cy.get('input[type="string"]').type("123456")
        cy.get('input[type="password"]').type("123456")
        cy.get('.btn').contains("Login").click()

    })

    it("test Edit products button", function () {
        cy.visit("http://localhost:8000/admin")
        cy.get('.btn').contains("Edit products").should("be.visible").click()

    })

    it("test create product", function () {
        cy.get('input[placeholder="city"]').type("City")
        cy.get('input[placeholder="street"]').type("Street")
        cy.get('input[placeholder="description"]').type("Description")
        cy.get('input[placeholder="Room"]').type("Room")
        cy.get('input[placeholder="Price"]').type("123456")
        cy.get('input[placeholder="Main img"]').type("url1")
        cy.get('input[placeholder="Inside image"]').type("url2")
        cy.get('input[placeholder="surroundings"]').type("url3")
        cy.contains("create").click()

    })

    it("test edit product", function () {
        cy.get(".btn-update").click()
        cy.get('input[name="city"]').type("New york city")
        cy.contains("Update").click()

    })
})