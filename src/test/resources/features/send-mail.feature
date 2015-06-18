# language: en
# ------------------------------------------------------------------------------
Feature: Send an Email

  Background: 
    Given I'm at sample app

  Scenario: Send an Email
    When I click on button "New"
    And I fill:
      | To      | Rui Figueira   |
      | Subject | Minium Test    |
      | Message | My new Message |
    And I click on button "Send"
    Then I navigate to section "Sent"
    And I should see an email with:
      | Contact | Rui Figueira   |
      | Subject | Minium Test    |
      | Message | My new Message |

  Scenario: Reply to an Email
    When I click on the email with:
      | Subject | Ping |
    And I click on button "reply"
    And I fill:
      | Message | BDD is definitely the way to create quality software |
    And I click on button "Send"
    Then I navigate to section "Sent"
    And I should see an email with:
      | Contact | Mario Lameiras                                       |
      | Subject | Re: Ping                                             |
      | Message | BDD is definitely the way to create quality software |

  Scenario: Forward an Email
    When I click on the email with:
      | Subject | Ping |
    And I click on button "forward"
    And I fill:
      | To      | Rui Figueira           |
      | Message | You should read this!! |
    And I click on button "Send"
    Then I navigate to section "Sent"
    And I should see an email with:
      | Contact | Rui Figueira           |
      | Subject | Fw: Ping               |
      | Message | You should read this!! |

  Scenario Outline: Send simple emails
    When I click on button "New"
    And I fill:
      | To      | <to>      |
      | Subject | <subject> |
      | Message | <message> |
    And I click on button "Send"
    Then I navigate to section "Sent"
    And I should see an email with:
      | Contact | <to>      |
      | Subject | <subject> |
      | Message | <message> |

    Examples: 
      | to             | subject      | message                                                 |
      | Rui Figueira   | Minium Test  | My New messages                                         |
      | Mario Lameiras | BDD + Minium | Egestas morbi at. Curabitur aliquet et commodo nonummy  |
      | Mario Lameiras | Lorem ipsum  | Lorem ipsum dolor sit amet, consectetur adipiscing elit |
