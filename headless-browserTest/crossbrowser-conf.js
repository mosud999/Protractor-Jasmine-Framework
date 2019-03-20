// keep this in project level;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 90000,
  
  //PageTimeout:100000,
  jasmineNodeOpts: {defaultTimeoutInterval:90000},
  showColors: false,
  
  specs: ['headless-browserTest/crossBrowserTest.js'],
  
  // Running in chrome headless browser
 
  capabilities: {
	  browserName: 'chrome',

	  chromeOptions: {
	     args: [ "--headless"]
	   }
	},
	
	// Running in firefox headless browser
	capabilities: {
		  browserName: 'firefox',

		  'moz:firefoxOptions': {
		     args: [ "--headless" ]
		   }
		}

  
  onPrepare: function() {
   
   const startTime = new Date();
  
      // Add a screenshot reporter and store screenshots to `/Report/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({

         baseDirectory: 'headless-browserTest/screenshots',
         os: 'Mac',

         /*consolidate: 'False',
         consolidateAll: 'False',*/
        // docname:'TestReport',
 
         docTitle: 'Automaton Test Report',
      }).getJasmine2Reporter());
         
    
      new HtmlReporter({
        baseDirectory: 'headless-browserTest/screenshots',
        
   
         preserveDirectory: false
          
     });
} }﻿