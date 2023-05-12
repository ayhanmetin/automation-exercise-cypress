///<reference types="cypress" />

describe('viewport settings', () => {

  it('viewport set-up with numbers', () => {
    cy.viewport(1200, 1000);
    cy.visit('https://shopist.io/');
  });

  it.only('viewport set-up with string', () => {
    cy.viewport('macbook-16');
    cy.visit('https://shopist.io/');
  });
});