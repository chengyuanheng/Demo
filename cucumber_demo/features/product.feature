Feature: Order Product
  In order to get some product
  A customer
  Should be able to order product


  Scenario: The product have description
    Given The description is present
    Then I should see title "i want it"

  Scenario: The product have not description
    Given The description is blank
    Then I should see title "i do not want it"


  Scenario:  Create new Product
    When I come in /products/new page
    And  I enter title in title input
    And  I enter description in description input
    And  I click create button
    Then I should come in product create success page

