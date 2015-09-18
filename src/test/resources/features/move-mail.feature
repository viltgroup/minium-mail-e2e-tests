Feature: Move Emails

  Background: 
    Given I'm at Minium Mail

  Scenario: Move an email
    Given an email with Subject "Minium Can!" exists under "Inbox"
    And an email with Subject "Minium Can!" doesn't exist under "Later"
    And I'm at section "Inbox"
    When I move an email with Subject "Minium Can!" to "Later"
    And I navigate to section "Later"
    Then I should see an email with:
      | Subject | Minium Can! |
