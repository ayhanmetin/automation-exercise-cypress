///<reference types="cypress" />

//go to support => commands:
// Cypress.Commands.add('loginSession', (username, password) => {
//   cy.session([username, password], () => {
//     cy.visit('https://react-redux.realworld.io')
//     cy.contains('Sign in').click()
//     cy.get("input[placeholder = 'Email']").type(username)
//     cy.get("input[placeholder = 'Password']").type(password)
//     cy.get("button[type = 'submit']").click()
//     cy.contains('New Post').click();
//   })
// })

describe('Cypress cy.session()', () => {

  beforeEach(() => {
    const username = "test@testfrankfurt.com";
    const password = "frankfurt";
    cy.loginSession(username,password);
  });
  it('session example 1', () => {
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('New Post').click();
    cy.get("input[placeholder = 'Article Title']").type('Lsorsem Ipsum');

    cy.get(':nth-child(2) > .form-control').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...');

    cy.get(':nth-child(3) > .form-control').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas id est vitae dapibus. Mauris quis quam et justo tempus tincidunt. Vestibulum consequat, libero euismod maximus laoreet, justo justo malesuada nunc, imperdiet elementum ligula justo non est.');

    cy.get("input[placeholder = 'Enter tags']").type('cypress');
    cy.contains('Publish Article').click();
    cy.contains('Edit Article').should('be.visible');
  });
});
