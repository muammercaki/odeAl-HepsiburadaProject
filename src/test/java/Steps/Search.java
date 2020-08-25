package Steps;

import Base.BaseStep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class Search extends BaseStep {
    @Then("^Search box send key samsung$")
    public void searchBoxSendKeySamsung() {
        waitByMilliSeconds(2);
        sendKeys("Samsung","searchInput");
    }

    @And("^Search Icon click$")
    public void searchIconClick() {
        clicktoElement("searchBoxButton");
    }

    @And("^confirm search$")
    public void confirmSearch() {
        waitByMilliSeconds(3);
        verifyResult("returnSearchValue","samsung");
    }
}
