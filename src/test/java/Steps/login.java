package Steps;

import Base.BaseStep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;

public class login extends BaseStep {
    protected static Logger logger = LogManager.getLogger(login.class);

    @Given("^a web browser is at the home page$")
    public void aWebBrowserIsAtTheHomePage() {
        initializeDriver();
    }

    @Then("^hover login & signUp button$")
    public void hoverLoginSignUpButton() {
        hoverElement("hoverMyAccount");
        waitBySeconds(2);
    }

    @And("^the login click button$")
    public void theLoginClickButton() {
        clicktoElement("loginButton");
    }

    @Then("^the sees the login page$")
    public void theSeesTheLoginPage() {
        waitBySeconds(3);
        logger.info("currentURL: "+webDriver.getCurrentUrl());
        Assert.assertTrue(webDriver.getCurrentUrl().contains("https://giris.hepsiburada.com/"));
    }

    @Then("^user enter email$")
    public void userEnterEmail() {
        waitBySeconds(2);
        sendKeys("savop87366@sanizr.com", "userEmail");
    }

    @And("^user enter password$")
    public void userEnterPassword() {
        sendKeys("Test12345","userPassword");
    }

    @And("^user click submit button$")
    public void userClickSubmitButton() {
        clicktoElement("submitButton");

    }


}
