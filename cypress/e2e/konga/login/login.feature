Feature: Konga Login
    
    I want to test Konga Login

    @focus
    Scenario: Test konga valid login credentials
        Given I am on the landing page
        When I click on login or signup button
        And I enter email address, password and 
        And I click on login button
        Then I should be redirected to my home page