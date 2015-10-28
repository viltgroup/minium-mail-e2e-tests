# language: en
# ------------------------------------------------------------------------------
Feature: Send Emails

  Background: 
    Given I'm at Minium Mail

  Scenario: Send an Email
    When I click on button "Compose"
    And I fill:
      #@source:src/test/resources/data/data-table.csv
      | Recipients | Rui Figueira   |
      | Subject    | Minium Test    |
      | Message    | My new Message |
    And I click on button "Send"
    And I navigate to section "Sent"
    Then I should see an email with:
      | Recipients | Rui Figueira   |
      | Subject    | Minium Test    |
      | Message    | My new Message |

  Scenario: Reply to an Email
    When I click on the email with:
      | Subject | Ping |
    And I click on button "Reply"
    And I fill:
      | Message | BDD is definitely the way to create quality software |
    And I click on button "Send"
    And I navigate to section "Sent"
    Then I should see an email with:
      | Recipients | Mario Lameiras                                       |
      | Subject    | Re: Ping                                             |
      | Message    | BDD is definitely the way to create quality software |

  Scenario: Forward an Email
    When I click on the email with:
      | Subject | Ping |
    And I click on button "Forward"
    And I fill:
      | Recipients | Rui Figueira           |
      | Message    | You should read this!! |
    And I click on button "Send"
    And I navigate to section "Sent"
    Then I should see an email with:
      | Recipients | Rui Figueira           |
      | Subject    | Fw: Ping               |
      | Message    | You should read this!! |

  Scenario Outline: Send simple emails
    When I click on button "Compose"
    And I fill:
      | Recipients | <to>      |
      | Subject    | <subject> |
      | Message    | <message> |
    And I click on button "Send"
    And I navigate to section "Sent"
    Then I should see an email with:
      | Recipients | <to>      |
      | Subject    | <subject> |
      | Message    | <message> |

    Examples: 
      #@source:src/test/resources/data/data.csv
      | to             | subject      | message                                                 |
      | Rui Figueira   | Minium Test  | My New messages                                         |
      | Mario Lameiras | BDD + Minium | Egestas morbi at. Curabitur aliquet et commodo nonummy  |
      | Mario Lameiras | Lorem ipsum  | Lorem ipsum dolor sit amet, consectetur adipiscing elit |
