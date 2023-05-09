const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');


cypress.run({
  // specs to run here
  autoCancelAfterFailures: 2,
  testingType: "e2e",
  

})

.then((results) => {
   console.log("results.totalFailed", results.totalFailed)
  })
  .catch((err) => {
    console.error(err)
  })



 
  






