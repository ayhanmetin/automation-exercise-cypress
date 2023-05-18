///<reference types="cypress" />

describe('Cypress trigger example', () => {
  it('trigger 1', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#nav-link-accountList > .nav-line-2').trigger('mouseover');
    cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click();

    cy.location('pathname').should('contain', 'signin');
  });
  
  it.only('trigger 2', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#nav-link-accountList > .nav-line-2').trigger('mousedown', {button: 0}); 
    //.trigger('mousedown', {button: 0}) command simulates a left-click (primary button press) on the selected element in a web page using Cypress.
  });
});
