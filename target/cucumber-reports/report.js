$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hepsiburadaSearchAndFavorite.feature");
formatter.feature({
  "line": 1,
  "name": "Website login \u0026 search product \u0026 Product Add Favorite \u0026 Product Delete Favorite",
  "description": "",
  "id": "website-login-\u0026-search-product-\u0026-product-add-favorite-\u0026-product-delete-favorite",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User login by succesfully completing",
  "description": "",
  "id": "website-login-\u0026-search-product-\u0026-product-add-favorite-\u0026-product-delete-favorite;user-login-by-succesfully-completing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a web browser is at the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "hover login \u0026 signUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the login click button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the sees the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter email",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "login.aWebBrowserIsAtTheHomePage()"
});
formatter.result({
  "duration": 17932247123,
  "status": "passed"
});
formatter.match({
  "location": "login.hoverLoginSignUpButton()"
});
formatter.result({
  "duration": 2349152414,
  "status": "passed"
});
formatter.match({
  "location": "login.theLoginClickButton()"
});
formatter.result({
  "duration": 1377159852,
  "status": "passed"
});
formatter.match({
  "location": "login.theSeesTheLoginPage()"
});
formatter.result({
  "duration": 4420239168,
  "status": "passed"
});
formatter.match({
  "location": "login.userEnterEmail()"
});
formatter.result({
  "duration": 2435930859,
  "status": "passed"
});
formatter.match({
  "location": "login.userEnterPassword()"
});
formatter.result({
  "duration": 241376730,
  "status": "passed"
});
formatter.match({
  "location": "login.userClickSubmitButton()"
});
formatter.result({
  "duration": 63987437,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Type Samsung in the Search field at the top screen of the screen and click search",
  "description": "",
  "id": "website-login-\u0026-search-product-\u0026-product-add-favorite-\u0026-product-delete-favorite;type-samsung-in-the-search-field-at-the-top-screen-of-the-screen-and-click-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Search box send key samsung",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Search Icon click",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "confirm search",
  "keyword": "And "
});
formatter.match({
  "location": "Search.searchBoxSendKeySamsung()"
});
formatter.result({
  "duration": 7680243104,
  "status": "passed"
});
formatter.match({
  "location": "Search.searchIconClick()"
});
formatter.result({
  "duration": 1076653954,
  "status": "passed"
});
formatter.match({
  "location": "Search.confirmSearch()"
});
formatter.result({
  "duration": 7166642730,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Scroll and go to second page",
  "description": "",
  "id": "website-login-\u0026-search-product-\u0026-product-add-favorite-\u0026-product-delete-favorite;scroll-and-go-to-second-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@listProducts"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "scroll until find the element",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click second page button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "check second page",
  "keyword": "And "
});
formatter.match({
  "location": "ListProducts.scrollUntilFindTheElement()"
});
formatter.result({
  "duration": 3922213671,
  "status": "passed"
});
formatter.match({
  "location": "ListProducts.clickSecondPageButton()"
});
formatter.result({
  "duration": 4719723253,
  "status": "passed"
});
formatter.match({
  "location": "ListProducts.checkSecondPage()"
});
formatter.result({
  "duration": 2562527811,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Click random item",
  "description": "",
  "id": "website-login-\u0026-search-product-\u0026-product-add-favorite-\u0026-product-delete-favorite;click-random-item",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@randomProductClick"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "click random product",
  "keyword": "Then "
});
formatter.match({
  "location": "RandomProduct.clickRandomProduct()"
});
formatter.result({
  "duration": 7037095545,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Random clicked add product favorite",
  "description": "",
  "id": "website-login-\u0026-search-product-\u0026-product-add-favorite-\u0026-product-delete-favorite;random-clicked-add-product-favorite",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@randomClickedAddProductFavorite"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "detail page click to favorite button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "hover account button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "click my favorite button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "check favorite product",
  "keyword": "And "
});
formatter.match({
  "location": "AddFavorite.detailPageClickToFavoriteButton()"
});
formatter.result({
  "duration": 6838668720,
  "status": "passed"
});
formatter.match({
  "location": "AddFavorite.hoverAccountButton()"
});
formatter.result({
  "duration": 4394428517,
  "status": "passed"
});
formatter.match({
  "location": "AddFavorite.clickMyFavoriteButton()"
});
formatter.result({
  "duration": 6205131710,
  "status": "passed"
});
formatter.match({
  "location": "AddFavorite.checkFavoriteProduct()"
});
formatter.result({
  "duration": 2934637893,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Delete clicked product",
  "description": "",
  "id": "website-login-\u0026-search-product-\u0026-product-add-favorite-\u0026-product-delete-favorite;delete-clicked-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@deleteProductFavorite"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "hover product",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "select product",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "remove selected product",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Delete popup button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "check remove product",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "close page",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveProduct.hoverProduct()"
});
formatter.result({
  "duration": 2171334301,
  "status": "passed"
});
formatter.match({
  "location": "RemoveProduct.selectProduct()"
});
formatter.result({
  "duration": 199481335,
  "status": "passed"
});
formatter.match({
  "location": "RemoveProduct.removeSelectedProduct()"
});
formatter.result({
  "duration": 148677004,
  "status": "passed"
});
formatter.match({
  "location": "RemoveProduct.deletePopupButton()"
});
formatter.result({
  "duration": 113467166,
  "status": "passed"
});
formatter.match({
  "location": "RemoveProduct.checkRemoveProduct()"
});
formatter.result({
  "duration": 3081570145,
  "status": "passed"
});
formatter.match({
  "location": "RemoveProduct.closePage()"
});
formatter.result({
  "duration": 450535943,
  "status": "passed"
});
});