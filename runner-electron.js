const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');


cypress.run({
  // specs to run here


})

.then((results) => {
  
  if (results.totalFailed == 1) {
    console.error('Could not execute tests'),
      process.exit(results.failures)
    process.exit(results.totalFailed)
}
  })
  .catch((err) => {
    console.error(err)
      process.exit(1)

  })



 
  






