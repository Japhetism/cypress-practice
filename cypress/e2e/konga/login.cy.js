/// <reference types="cypress" />

describe("Test Konga login ", () => {

    it("Test valid login credentials", () => {

        // go to Konga landing page
        cy.visit("https://www.konga.com/");

        // click on login/signup button
        cy.get("._12e27_1r3kc > ._7ad32_SD12Y").click();

        // confirm the login modal is visible
        let expectedLoginText = "Login";
        cy.get("h5").then((x) => {
            let actualLoginText = x.text();
            expect(actualLoginText).to.equal(expectedLoginText);
        })

        // enter email address
        cy.get("#username").type("username@a.com");

        // confirm that the username field have username@a.com as value
        cy.get("#username").should("have.value", "username@a.com");

        // enter password
        cy.get("#password").type("pass");

        // confirm that the password field have pass as value
        cy.get("#password").should("have.value", "pass");

        // click on login button
        cy.get('button[type="submit"]').contains("Login").click();

        // confirm that user is on the login screen by checking that the first span have My Account as a text
        cy.get("._7ad32_SD12Y > span:nth-child(1)").should('have.text', "My Account");

    })
})