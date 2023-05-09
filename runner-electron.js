const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');


cypress.run({
  // specs to run here
  autoCancelAfterFailures: 2
  

})
.then((results) => {
  const args = {
    target: process.env.TARGET_TOKEN_ELECTRON,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})


