/// <reference types="cypress" />

// import pages
import LoginPage from "../../pages/login";

describe("Test Konga login ", () => {

    // create an instance of login class
    const loginPage = new LoginPage();

    it("Test valid login credentials", () => {

        // go to Konga landing page
        cy.visit("https://www.konga.com/");

        // click on login/signup button
        loginPage.clickLoginSignupBtn();

        // validate login modal is visible
        loginPage.validateLoginModalVisible("Login");

        // enter email address
        loginPage.setEmail("a@gmail.com");

        // validate email field have the expected value
        loginPage.validateEmailField("a@@gmail.com")

        // enter password
        loginPage.setPassword("pass");

        // validate password field have the expected value
        loginPage.validatePasswordField("pass");

        // click on login button
        loginPage.clickLoginBtn();

        // validate user is logged in
        loginPage.validateUserLogin("My Account");

    })
})