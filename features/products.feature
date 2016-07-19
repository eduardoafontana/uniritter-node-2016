Feature: products
    As an API client
    I want to manage my products
    
Scenario: posting product
    Given a valid product
    When I submit it to the API products
    Then I receive a success message
    And the new product id

Scenario Outline: invalid product
  Given an invalid product that <condition>
  When I submit it to the API products
  Then I receive an error response
  And a message saying that <notification>
Examples:
  |         condition                   |   notification                |
  | is missing the name                 | child "data" fails because [child "attributes" fails because [child "name" fails because ["name" must be a string]]]  |
  | has a negative price                | child "data" fails because [child "attributes" fails because [child "price" fails because ["price" must be larger than or equal to 0]]]     |
  
      