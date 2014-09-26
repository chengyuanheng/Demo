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
    And  I enter 笔记本 in name input
    And  I enter 学习用具 in title input
    And  I enter 晨光笔记本 in description input
    And  I enter 库存紧张 in remark input
    And  I enter 3元 in price input
    And  I click submit button
    Then I should create a new product

