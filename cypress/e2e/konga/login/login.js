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

When("I enter email address as {string} and password as {string}", (email, password) => {
    loginPage.setEmail(email)
    loginPage.setPassword(password);
});

Then("I expected email address as {string} and password as {string}", (email, password) => {
    loginPage.validateEmailField(email)
    loginPage.validatePasswordField(password);
});

When("I click on login button", () => {
    loginPage.clickLoginBtn();
});

Then("I should be redirected to my home page", () => {
    loginPage.validateUserLogin("My Account");
});