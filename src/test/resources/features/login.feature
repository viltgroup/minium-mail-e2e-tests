Feature: Login

  Scenario: Login
    Given I'm at the login page
    When I submit the registration form with:
      | email    | demo  |
      | password | demo  |
    Then I should go to the homepage

  Scenario: Incorrect Login
    Given I'm at the login page
    When I submit the registration form with:
      | email    | wrong |
      | password | wrong |
    Then I should see an error message
