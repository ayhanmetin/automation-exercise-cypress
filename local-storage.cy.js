///<reference types="cypress" />

describe('cypress local storage', () => {
  it('local storage example', () => {
    cy.visit('https://www.qrcode-monkey.com/').then(() =>{

      cy.log(localStorage.length);

      localStorage.setItem('Cypress Example', 'Frankfurt');

      cy.wait(2000).then(() => {
        localStorage.removeItem('cypress example');
      })
      
    })
  });
});