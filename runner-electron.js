const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');


cypress.run({
  // specs to run here
  autoCancelAfterFailures: 2,
  testingType: "e2e",
  

})

.then((results) => {
  
  if (results.totalFailed == 1) {
    console.error('Could not execute tests'),
      process.exit(results.failures)
}
  })
  .catch((err) => {
    console.error(err)
      process.exit(1)

  })



 
  






