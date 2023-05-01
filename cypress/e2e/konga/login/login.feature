Feature: Konga Login
    
    I want to test Konga Login

    @focus
    Scenario: Test konga valid login credentials
        Given I am on the landing page
        When I click on login or signup button
        Then I should see login modal
        When I enter email address and password
        Then I expected email address and password fields to have value
        When I click on login button
        Then I should be redirected to my home page