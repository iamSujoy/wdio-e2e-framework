Feature: After login to OrangeHRM validate other operations

    Background: Precondition login to OrangeHRM
        Given User opens login page on browser
        When User enters valid credentials and clicks on Login
        And User is on Dashboard page

    Scenario: Update Personal Details
        When User navigates to MyInfo page
        And User updates First Name
        And User updates Last Name
        And User updates Employee ID
        And User updates Nationality
        Then User should be able to save the informations successfully


    Scenario: Opening User Guide page
        When User clicks on Help icon
        Then User should be redirected to a new OrangeHRM Guide tab


