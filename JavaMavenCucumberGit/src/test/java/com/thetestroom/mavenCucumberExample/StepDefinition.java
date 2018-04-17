package com.thetestroom.mavenCucumberExample;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.thetestroom.pageObject.ContactConfirmPage;
import com.thetestroom.pageObject.ContactPage;
import com.thetestroom.pageObject.LandingPage;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefinition {

	WebDriver driver;
	LandingPage landingPage;
	ContactPage contactPage;
	ContactConfirmPage contactConfirmPage;

	@Before // hook in cucumber
	public void testSetUp() {
		System.setProperty("webdriver.chrome.driver",
				//"C:\\Users\\sanpab\\OneDrive - DNV GL\\My Documents\\WORK\\SeleniumTraining\\TrainingFiles\\Software\\chromedriver.exe");
				"ChromeDriver/chromedriver.exe"); 
		driver = new ChromeDriver();
//		System.setProperty("webdriver.ie.driver",
//				"C:\\Users\\sanpab\\Documents\\WORK\\SeleniumTraining\\TrainingFiles\\Software\\IEDriverServer.exe");
//		DesiredCapabilities capability = DesiredCapabilities.internetExplorer();
//		capability.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
//		capability.setCapability(InternetExplorerDriver.IGNORE_ZOOM_SETTING, true);		
//		driver = new InternetExplorerDriver();
	}

	@Given("^I am on the zoo site$")
	public void I_am_on_the_zoo_site() throws Throwable {
		landingPage = new LandingPage(driver);
		landingPage.navigateToWebApp();
	}

	@When("^I click on \"([^\"]*)\"$")
	public void I_click_on(String link) throws Throwable {
		contactPage = landingPage.navigateToContactPage(link);
	}

	@And("^I enter \"([^\"]*)\" into the name field$")
	public void I_enter_into_the_name_field(String value) throws Throwable {
		contactPage.setNameField(value);
	}

	@And("^I enter \"([^\"]*)\" into the address field$")
	public void I_enter_into_the_address_field(String value) throws Throwable {
		contactPage.setAddressField(value);
	}

	@And("^I enter \"([^\"]*)\" into the postcode field$")
	public void I_enter_into_the_postcode_field(String value) throws Throwable {
		contactPage.setPostCodeField(value);
	}

	@And("^I enter \"([^\"]*)\" into the email field$")
	public void I_enter_into_the_email_field(String value) throws Throwable {
		contactPage.setEmailField(value);
	}

	@And("^I populate the entire form$")
	public void I_populate_the_entire_form() throws Throwable {
		contactPage
			.setNameField("name")
			.setAddressField("address")
			.setPostCodeField("postcode")
			.setEmailField("email");
	}

	@And("^I submit the contact form$")
	public void I_submit_the_contact_form() throws Throwable {
		contactConfirmPage = contactPage.submitForm();
	}

	@Then("^I check I am on the confirmation page$")
	public void I_check_I_am_on_the_confirmation_page() throws Throwable {
		Assert.assertTrue(contactConfirmPage.getPageTitle().contains("We have some message"));
	}

	@And("^I close the browser$")
	public void I_close_the_browser() throws Throwable {
		contactConfirmPage.closeDriver();
	}

}
