package Steps;

import Base.BaseStep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;

public class AddFavorite extends BaseStep {
    protected String alınacakUrun;

    @And("^detail page click to favorite button$")
    public void detailPageClickToFavoriteButton() {
        keysDownScroll(16);
        alınacakUrun = webDriver.findElement(By.cssSelector("header[class='title-wrapper']> h1[id='product-name']")).getText();
        waitBySeconds(2);
        logger.info("Favorite Product: " + alınacakUrun);
        hardClick("productFavoriteButton");
    }

    @Then("^hover account button$")
    public void hoverAccountButton() {
        scrollToElement("hoverMyAccount");
        hoverElement("hoverMyAccount");
        waitBySeconds(2);
    }

    @And("^click my favorite button$")
    public void clickMyFavoriteButton() {
        clicktoElement("myFavoriteButton");
    }

    @And("^check favorite product$")
    public void checkFavoriteProduct() {
        keysDownScroll(7);
        waitBySeconds(2);
        String favoriteProduct = webDriver.findElement(By.cssSelector("div[class='product-item ']:nth-child(1) div[class='sc-brqgnP dIwHaH']")).getText();
        logger.info("Favorite Taken Product: " + favoriteProduct);
        Assert.assertTrue(favoriteProduct.contains(alınacakUrun));
    }
}
