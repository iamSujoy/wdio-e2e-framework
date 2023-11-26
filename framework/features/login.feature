Feature: OrangeHRM Login

    Scenario Outline: User should be able to login with valid credentials
        Given User is on Login page
        When User logs in with "<username>" and "<password>"
        Then User should be on Dashboard page
        And User should be able to logout by clicking on Logout from profile options

        Examples:
            | username | password |
            | Admin    | admin123 |

