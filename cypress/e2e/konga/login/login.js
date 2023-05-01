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

Then("I should see login modal", () => {
    loginPage.validateLoginModalVisible("Login");
});

When("I enter email address, password", () => {
    loginPage.setEmail("")
    loginPage.setPassword("");
});

Then("Email address and password should have expected values", () => {
    loginPage.validateEmailField("")
    loginPage.validatePasswordField("");
});

When("I click on login button", () => {
    loginPage.clickLoginBtn();
});

Then("I should be redirected to my home page", () => {
    loginPage.validateUserLogin("My Account");
});