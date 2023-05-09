const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');


cypress.run({
  // specs to run here

})
then(result => {
  if (result.failures) {
    
    const args = {
    target: process.env.TARGET_TOKEN_ELECTRON,
  }
    
    console.error('Could not execute tests')
    console.error(result.message)
    process.exit(result.failures)
  }
  

  // print test results and exit
  // with the number of failed tests as exit code
  tesults.results(results, args);
  process.exit(result.totalFailed)
  
})



.catch(err => {
  console.error(err.message)
  process.exit(1)
})
