/* There  are two approach for using non Angular js in Protractor.
Approach-1 :  
(Add this code before browser
		browser.ignoreSynchronization=true;
Approach-2
Add browser.driver in every code;
		browser.driver.get;
		browser.driver.element; */

describe("This is nonAngular Test", function() {
	it("This test will fillout a form", function() {
		
		browser.ignoreSynchronization=true; // for nonAngular js
		browser.get("http://seleniumpractise.blogspot.com/2016/09/complete-registration-form.html");
	    element(by.name("first_name")).sendKeys("mosud");
	    element(by.name("last_name")).sendKeys("Ahmed");
	    element(by.name("maths")).click();
	})
})

/*
describe("This is nonAngular Test", function() {
	it("This test will fillout a form", function() {
		browser.driver.get("http://seleniumpractise.blogspot.com/2016/09/complete-registration-form.html");
		browser.driver.element(by.name("first_name")).sendKeys("mosud");
		browser.driver.element(by.name("last_name")).sendKeys("Ahmed");
		browser.driver.element(by.name("maths")).click();
	})
})
*/