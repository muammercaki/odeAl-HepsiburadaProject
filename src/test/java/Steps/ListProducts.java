package Steps;

import Base.BaseStep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class ListProducts extends BaseStep {
    @Then("^scroll until find the element$")
    public void scrollUntilFindTheElement() {
        scrollToElement("bottomPagination");
    }

    @Then("^click second page button$")
    public void clickSecondPageButton() {
        clicktoElement("secondPageButton");
    }

    @And("^check second page$")
    public void checkSecondPage() {
        waitBySeconds(2);
        logger.info("currentURL: "+webDriver.getCurrentUrl());
        Assert.assertTrue(webDriver.getCurrentUrl().contains("sayfa=2"));
    }
}
