///<reference types="cypress" />

//to install cy.step():

//npm i cypress-plugin-steps

//go to support/e2e and import 'cypress-plugin-steps'

describe('Cypress step example', () => {
  it('step example', () => {
    cy.step('visit shopist sofas page')
    cy.visit('https://shopist.io/department/sofas');
    cy.step('sofa price descriptions length')
    cy.get('.description').as('sofaPrice').its('length').should('eq', 9);

    const result = [];
    cy.step('logging results')
    cy.get('@sofaPrice').each(($el, index) => {
      cy.log(`Result ${index} - ${$el.text()}`)
      result.push($el.text());
    }).then(() =>{
      cy.step('writing results to a txt file')
      cy.writeFile('writeFile/webScrapping.txt', result);
    })
  });
});

