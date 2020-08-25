Feature: Website login & search product & Product Add Favorite & Product Delete Favorite

  @login
  Scenario: User login by succesfully completing
    Given a web browser is at the home page
    Then hover login & signUp button
    And the login click button
    Then the sees the login page
    Then user enter email
    And user enter password
    And user click submit button

  @search
  Scenario: Type Samsung in the Search field at the top screen of the screen and click search
    Then Search box send key samsung
    And Search Icon click
    And confirm search

  @listProducts
  Scenario: Scroll and go to second page
    Then scroll until find the element
    Then click second page button
    And check second page

  @randomProductClick
  Scenario: Click random item
    Then click random product

  @randomClickedAddProductFavorite
  Scenario: Random clicked add product favorite
    And detail page click to favorite button
    Then hover account button
    And click my favorite button
    And check favorite product

  @deleteProductFavorite
  Scenario: Delete clicked product
    Then hover product
    And select product
    And remove selected product
    And Delete popup button
    And check remove product
    And close page