var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 90000,
  
  //PageTimeout:100000,
  jasmineNodeOpts: {defaultTimeoutInterval:90000},
  showColors: false,
  
  specs: ['Day2/secondTest.js'],
  
  onPrepare: function() {
   
   const startTime = new Date();
  
      // Add a screenshot reporter and store screenshots to `/Report/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({

         baseDirectory: 'Report/screenshots',
         os: 'Mac',

         /*consolidate: 'False',
         consolidateAll: 'False',*/
        // docname:'TestReport',
 
         docTitle: 'Automaton Test Report',
      }).getJasmine2Reporter());
         
    
      new HtmlReporter({
        baseDirectory: 'Report/screenshots',
        
   
         preserveDirectory: false
          
     });
} }﻿