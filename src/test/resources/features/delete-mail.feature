Feature: Delete Emails

  Background: 
    Given I'm at Minium Mail

  Scenario: Delete an email
    Given an email with Subject "Test Execution report for sample-app" exists
    When I delete an email with Subject "Test Execution report for sample-app"
    And I navigate to section "Trash"
    Then I should see an email with:
      | Subject    | Test Execution report for sample-app |
      | Recipients | Rui Figueira                         |

  Scenario: Delete an email from trash
    Given I'm at section "Trash"
    And an email with Subject "Phasellus vitae interdum nulla." exists
    When I delete an email with Subject "Phasellus vitae interdum nulla."
    Then I shouldn't see an email with:
      | Subject | Minium Can! |
