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

When("I enter email address and password", () => {
    loginPage.setEmail(loginData.email)
    loginPage.setPassword(loginData.password);
});

Then("I expected email address and password fields to have value", () => {
    loginPage.validateEmailField(loginData.email)
    loginPage.validatePasswordField(loginData.password);
});

When("I click on login button", () => {
    loginPage.clickLoginBtn();
});

Then("I should be redirected to my home page", () => {
    loginPage.validateUserLogin("My Account");
});