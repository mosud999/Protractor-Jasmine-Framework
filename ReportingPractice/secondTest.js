describe("This is the second test", function() {
	it("This will add two numbers", function() {
		browser.get("https://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();
		expect(element(by.className("ng-binding")).getText()).toEqual("10");
	});
	
});