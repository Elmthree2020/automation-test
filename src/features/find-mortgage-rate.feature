Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  Scenario: Find mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    When I navigate to Mortgage rates page
    And I search for the mortgage rates with the following details:
      | Nationwide mortgage | Type of mortgage | Property value | Mortgage amount | Term |
      | No                  | Changing lender  | 300000         | 150000          | 30   |
    Then the following Mortgage rates results should be returned:
      | Expected Results |
      | 2 yr Fixed       |
      | 3 yr Fixed       |
      | 5 yr Fixed       |
      | 10 yr Fixed      |
    When I select apply for 5yr fixed product
    Then I should progress to the Ready to Apply page