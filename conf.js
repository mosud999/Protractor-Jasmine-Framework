exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Day2/secondTest.js']
// Running in firefox browser
capabilities: {
	  'browserName': 'firefox'
	},
}