Feature: Konga Login
    
    I want to test Konga Login

    @focus
    Scenario: Test konga valid login credentials
        Given I am on the landing page
        When I click on login or signup button
        Then I should see login modal
        When I enter email address, password
        Then Email address and password should have expected values
        When I click on login button
        Then I should be redirected to my home page