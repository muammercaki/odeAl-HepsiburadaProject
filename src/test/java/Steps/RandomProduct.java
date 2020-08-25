package Steps;

import Base.BaseStep;
import cucumber.api.java.en.Then;

public class RandomProduct extends BaseStep {
    @Then("^click random product$")
    public void clickRandomProduct() {
        clickRandomElemet("secondPageProducts");
    }
}
