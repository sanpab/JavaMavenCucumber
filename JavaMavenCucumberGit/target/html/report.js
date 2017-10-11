$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ZooTest.feature");
formatter.feature({
  "line": 1,
  "name": "To test the high level functionality of the Zoo test site",
  "description": "",
  "id": "to-test-the-high-level-functionality-of-the-zoo-test-site",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the zoo site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.I_am_on_the_zoo_site()"
});
formatter.result({
  "duration": 4336389495,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.20 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LOUL140393\u0027, ip: \u002710.60.200.82\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\sanpab\\AppData\\Local\\Temp\\scoped_dir2328_32145}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4ee79d04f3de8ab217c39fbca0c92958\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:969)\r\n\tat com.thetestroom.pageObject.AbstractPage.navigateToWebApp(AbstractPage.java:14)\r\n\tat com.thetestroom.mavenCucumberExample.StepDefinition.I_am_on_the_zoo_site(StepDefinition.java:39)\r\n\tat ✽.Given I am on the zoo site(ZooTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "To populate the contact form",
  "description": "",
  "id": "to-test-the-high-level-functionality-of-the-zoo-test-site;to-populate-the-contact-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I click on \"Contact\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I populate the entire form",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I submit the contact form",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I check I am on the confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 12
    }
  ],
  "location": "StepDefinition.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_populate_the_entire_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_submit_the_contact_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_check_I_am_on_the_confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.I_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});