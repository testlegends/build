exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'acceptance/*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  chromeOnly: false,

  baseUrl: 'https://leejefon.local:1336/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
