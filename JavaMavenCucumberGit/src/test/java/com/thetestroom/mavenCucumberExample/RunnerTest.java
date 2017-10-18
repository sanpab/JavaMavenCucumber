package com.thetestroom.mavenCucumberExample;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = {"pretty","json:target/json/output.json", "html:target/html/"}, features = "src/test/resource")
//@CucumberOptions(format = {"pretty","json:target/json/output.json", "html:target/html/"}, features = "src/test/resource")
//@CucumberOptions(features = "src/test/resource")
//@CucumberOptions( plugin = {"pretty", "json:target/json/output.json", "html:target/html/"}, glue = "/src/test/java/", features = "/src/test/resource/" )

public class RunnerTest {

}
