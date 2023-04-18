/// <reference types="cypress" />

// import pages
import LoginPage from "../../../pages/login";

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const baseUrl = "https://konga.com";

// create an instance of login class
const loginPage = new LoginPage();

Given("I am on the landing page", () => {
    cy.visit(baseUrl)
});
  
When("I click on login or signup button", () => {
    loginPage.clickLoginSignupBtn();
});

When("I enter email address, password and", () => {
    loginPage.setEmail("babatundeojo30@gmail.com")
    loginPage.setPassword("Semilore@92");
});

When("I click on login button", () => {
    loginPage.clickLoginBtn();
});

Then("I should be redirected to my home page", () => {

});