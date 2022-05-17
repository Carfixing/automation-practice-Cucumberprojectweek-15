Feature: CreateAccountPageTest
  As User I want to create an account in automation website

  @sanity,@regression,@smoke
  Scenario: verify that user should create account successfully
    Given I am on homepage
    When I click on Sign In link
    Then  I enter email address "bbkhbn3@gmail.com"
    And I click on create and account button
    Then I fill all mandetory fields "Ram","Patel","Ram41256","ram","Patel","54 stocklake","london","california","90936","07404567456","House"
    And I click on Register button
    And I can see my account
