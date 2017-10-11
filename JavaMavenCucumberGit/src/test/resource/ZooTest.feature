Feature: To test the high level functionality of the Zoo test site

  Background: 
    Given I am on the zoo site

  Scenario: To populate the contact form
    When I click on "Contact"
    And I populate the entire form
    And I submit the contact form
    Then I check I am on the confirmation page
    And I close the browser
