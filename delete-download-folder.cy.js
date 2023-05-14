///<reference types="cypress" />


//https://www.npmjs.com/package/cypress-delete-downloads-folder

//npm i -D cypress-delete-downloads-folder

//So, if you want to use custom cy.deleteDownloadsFolder() command then you need to add this line to your project's cypress/support/commands.js:
//require('cypress-delete-downloads-folder').addCustomCommand();

/* in cypress.config.js:

const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder'); // add this code


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { removeDirectory }) // add this code
    },
  },
}); 

*/

describe('delete downloads after test completed', () => {

  after(() => {
    cy.deleteDownloadsFolder();
  });

  it('delete downloads example', () => {
    cy.on('uncaught:exception', (err,runnable) => {return false})
    cy.visit('https://demoqa.com/upload-download');
    cy.get('#downloadButton').click();
  });
}); 