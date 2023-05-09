const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');


// cypress.run({
//   // specs to run here
//   autoCancelAfterFailures: 2,
// //   testingType: "e2e"
  

// })
// .then((results) => {
  

//   console.log("Testes", results.totalFailed),
//   if(results.totalFailed = 1) {
//     console.log("Teste")
//   }
  
// //   const args = {
// //     target: process.env.TARGET_TOKEN_ELECTRON,
// //   }

  
// //   tesults.results(results, args);
// })
// .catch((err) => {
//  console.error(err)
// })

cypress.run({...})
.then(result => {
  if (result.failures) {
    console.error('Could not execute tests')
    console.error(result.message)
    process.exit(result.failures)
  }

  // print test results and exit
  // with the number of failed tests as exit code
  process.exit(result.totalFailed)
})
.catch(err => {
  console.error(err.message)
  process.exit(1)
})


