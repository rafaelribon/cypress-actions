const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRhNzkzMzk5LWU1YTEtNDAyNS1iNjRiLWE5MjNlM2YyYWI2ZS0xNjgxODI5NTI0MDY3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTBiNTljNDItYjhjMi00ODgwLTgzM2YtZGY0Y2JmNTkwNzVkIiwidHlwZSI6InQifQ.EzEfq83AcTmw0oMswLeAZhYVyOXGqWcxbd_pnn8czV8'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
