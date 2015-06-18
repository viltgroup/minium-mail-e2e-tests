# language: en
# ------------------------------------------------------------------------------
Feature: Send an Email

  Background: 
    Given I'm at sample app

  Scenario: Send an Email
    When I click on button "New"
    And I fill the field "To" with "Rui Figueira"
    And I fill the field "Subject" with "Minium Test"
    And I fill the field "Message" with "My new Message"
    And I click on button "Send"
    Then I navigate to section "Sent"
    And I should see an email with "Contact" equals to "Rui Figueira"
    And I should see an email with "Subject" equals to "Minium Test"
    And I should see an email with "Message" equals to "My new Message"
