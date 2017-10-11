package com.thetestroom.pageObject;

import org.openqa.selenium.WebDriver;

public class AbstractPage {
	
	protected WebDriver driver;
	
	public AbstractPage (WebDriver driver) {
		this.driver = driver; //constructor to create this page
	}
	
	public LandingPage navigateToWebApp() {
		driver.navigate().to("http://www.thetestroom.com/webapp");
		return new LandingPage(driver);
	}
	
	public void closeDriver() {
		driver.quit();
	}
		
}
