// keep this in project level;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 90000,
  
  //PageTimeout:100000,
  jasmineNodeOpts: {defaultTimeoutInterval:90000},
  showColors: false,
  
  specs: ['CrossbrowserTest/crossBrowserTest.js'],
  
  // Running in firefox browser
  /*
  capabilities: {
	  'browserName': 'firefox'
	},
	*/
	
	// Running on multibrowser
	multiCapabilities: [{
		  'browserName': 'firefox'
		}, {
		  'browserName': 'chrome'
		}],
  
  onPrepare: function() {
   
   const startTime = new Date();
  
      // Add a screenshot reporter and store screenshots to `/Report/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({

         baseDirectory: 'CrossbrowserTest/screenshots',
         os: 'Mac',

         /*consolidate: 'False',
         consolidateAll: 'False',*/
        // docname:'TestReport',
 
         docTitle: 'Automaton Test Report',
      }).getJasmine2Reporter());
         
    
      new HtmlReporter({
        baseDirectory: 'CrossbrowserTest/screenshots',
        
   
         preserveDirectory: false
          
     });
} }﻿