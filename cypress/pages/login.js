class Login {

    /**
     * 
     * @returns
     *  Getters
     *  to get all necessary elements
    */

    getLoginSignupBtn() {
        return cy.get("._12e27_1r3kc > ._7ad32_SD12Y");
    }

    getEmail() {
        return cy.get("#username");
    }

    getPassword() {
        return cy.get("#password");
    }

    getLoginBtn() {
        return cy.get('button[type="submit"]').contains("Login");
    }

    getHeaderH5() {
        return cy.get("h5");
    }
    
    getMyAccountSpan() {
        return cy.get("._7ad32_SD12Y > span:nth-child(1)");
    }

    /**
     * 
     * @param {*}
     *  Setters
    */

    // set value for the elements
    setEmail(email) {
        this.getEmail().type(email);
    }

    setPassword(password) {
        this.getPassword().type(password);
    }

    /**
     *  Button clicks
    */

    // click on login button
    clickLoginBtn() {
        this.getLoginBtn().click();
    }

    // click on login/signup button
    clickLoginSignupBtn() {
        this.getLoginSignupBtn().click();
    }

    /**
     * 
     * @param {*}
     *  validators
    */

    // confirm that the username field have the expected value
    validateEmailField(email) {
        this.getEmail().should("have.value", email);
    }

    // confirm that the password field have the expected value
    validatePasswordField(password) {
        this.getPassword().should("have.value", password);
    }

    // confirm the login modal is visible
    validateLoginModalVisible(expectedLoginText) {
        this.getHeaderH5().then((x) => {
            let actualLoginText = x.text();
            expect(actualLoginText).to.equal(expectedLoginText);
        })
    }

    // confirm that user is on the login screen by checking that the first span have the expected text
    validateUserLogin(text) {
        this.getMyAccountSpan().should('have.text', text);
    }
    
}

export default Login;