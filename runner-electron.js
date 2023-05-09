const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');


cypress.run({
  // specs to run here
  autoCancelAfterFailures: 2,
  testingType: "e2e",
  

})

.then((results) => {
  
  if (result.failures) {
    console.error('Could not execute tests')
    console.error(result.message)
    process.exit(result.failures)
  
//   if (results.totalFailed == 1) {
//     console.log("Aqui")
  }
//    console.log("results.totalFailed", results.totalFailed)
  })
  .catch((err) => {
    console.error(err)
  })



 
  






