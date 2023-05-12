///<reference types="cypress" />

describe('basic tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('title practice', () => {
    cy.title().should('eq', 'Automation Exercise');
  });

  it('url practice', () => {
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.url().should('include', 'automationexercise.com/');
  });

  it('location practice', () => {
    cy.visit('/login');
    
    cy.location('pathname').should('eq','/login');
    cy.location('protocol').should('eq','https:');
    cy.location('hostname').should('eq','automationexercise.com');
    cy.location('hostname').should('include','automationexercise');
  });

  it.only('log practice', () => {
    cy.log('Cypress test automation practice document');
    cy.log('be.visible');
    cy.log('Numbers',['1','2', '3', '4']);
  });
});