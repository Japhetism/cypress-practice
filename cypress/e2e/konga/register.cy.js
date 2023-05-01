/// <reference types="cypress" />

describe("Test Konga signup ", () => {

    it("Test valid signup credentials", () => {

        // go to Konga landing page
        cy.visit("https://www.konga.com/");

        // click on login/signup button
        cy.get("._12e27_1r3kc > ._7ad32_SD12Y").click();

        // click on signup button
        cy.get('._1dce2_MjLDv > a').click();

        // confirm user is on the signup page
        cy.url().should('include', 'account/signup')  
            .should('eq', 'https://www.konga.com/account/signup')
            .should('contain', 'signup')
        
        // enter first name
        cy.get('#firstname').type("Bab");

        // enter last name
        cy.get('#lastname').type("Oko");

        // enter email address
        cy.get("#email").type("a@a.com");

        // enter phone number
        cy.get('#phone').type("111");

        // enter password
        cy.get("#password").type("password", {force: true});

        // confirm that the first name field have expected value
        cy.get("#firstname").should("have.value", "firstname");

        // confirm that the last name field have expected value
        cy.get("#lastname").should("have.value", "lastname");

        // confirm that the email field have expected value
        cy.get("#email").should("have.value", "Bab");

        // confirm that the phone number field have expected value
        cy.get("#phone").should("have.value", "111");

        // confirm that the password field have expected value
        cy.get("#password").should("have.value", "pass");

        // click on create an account button
        cy.get('.d563b_2w5FH > ._2aac2_3bwnD > ._0a08a_3czMG').click();

        // // confirm that user is on the login screen by checking that the first span have My Account as a text
        // cy.get("._7ad32_SD12Y > span:nth-child(1)").should('have.text', "My Account");

    })
})