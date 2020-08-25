package Steps;

import Base.BaseStep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class RemoveProduct extends BaseStep {
    @Then("^hover product$")
    public void hoverProduct() {
        waitBySeconds(2);
        hoverElement("myFavoriteProductName");
    }

    @And("^select product$")
    public void selectProduct() {
        clicktoElement("selectedProduct");
    }

    @And("^remove selected product$")
    public void removeSelectedProduct() {
        clicktoElement("removeSelected");
    }

    @And("^Delete popup button$")
    public void deletePopupButton() {
        clicktoElement("deleteConfirmation");
    }

    @And("^check remove product$")
    public void checkRemoveProduct() {
        elementRemoveControl("myFavoriteProductName");
        waitBySeconds(3);

    }

    @And("^close page$")
    public void closePage() {
        closeDriver();
    }
}
