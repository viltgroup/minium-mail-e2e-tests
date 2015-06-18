Feature: Move Emails

  Background: 
    Given I'm at sample app

  Scenario: Move an email
    When I move an email with Subject "Minium Can!" to "later"
    Then I navigate to section "Later"
    And I should see an email with:
      | Subject | Minium Can! |
