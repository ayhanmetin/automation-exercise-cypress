///<reference types="cypress" />

describe('Cypress write/read file exercise', () => {
  it('write file', () => {
    cy.writeFile('writeFile/example.txt', 'Cypress is awesome!');
    cy.writeFile('writeFile/example.txt', ' Make e2e test great again!', {flag:'a+'});
    //This Cypress command appends ' Make e2e test great again!' to the existing 'example.txt' file, thanks to the {flag:'a+'}

  });

  it('read file', () => {
    cy.readFile('writeFile/example.txt').should('contain', 'Cypress')
  });
});
