Feature: Delete Emails

  Background: 
    Given I'm at sample app

  Scenario: Delete an email
    When I delete an email with Subject "Minium Can!"
    Then I navigate to section "Trash"
    And I should see an email with:
      | Subject | Minium Can! |

  Scenario: Delete an email
    When I delete an email with Subject "Minium Can!"
    Then I navigate to section "Trash"
    And I should see an email with:
      | Subject | Minium Can! |
