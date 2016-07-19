Feature: orders
    As an API client
    I want to manage my orders
    
Scenario: posting order
    Given a valid order
    When I submit it to the API orders
    Then I receive a success message
    And the new order id

Scenario Outline: verify order status
  Given an existing order with a <s> status
  When I search this order
  Then I receive the order data
  And its status is <s>
Examples:
  |     s     |
  | new       |

Scenario Outline: invalid order
  Given an invalid order that <condition>
  When I submit it to the API orders
  Then I receive an error response
  And a message saying that <notification>
Examples:
  |         condition                   |   notification                |
  | is missing an item quantity         | child "data" fails because [child "attributes" fails because [child "items" fails because ["items" at position 0 fails because [child "quantity" fails because ["quantity" is required]]]]]    |
  | has an invalid format in product_id | child "data" fails because [child "attributes" fails because [child "items" fails because ["items" at position 0 fails because [child "product_id" fails because ["product_id" must be a valid GUID]]]]]     |

Scenario: order payment
    Given a valid order
    When I submit it to the API orders
    And wait a few seconds
    Then it moves to a paid status