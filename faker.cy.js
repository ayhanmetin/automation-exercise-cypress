const { faker } = require('@faker-js/faker')

let fakeMail = faker.internet.email();
let fakePassword = faker.internet.password();
let fakeName = faker.person.firstName();

describe('using faker-js', () => {
  it('faker js example', () => {
    cy.visit('https://automationexercise.com/login');

    cy.get('[data-qa="signup-name"]').type(fakeName)
    cy.get('[data-qa="signup-email"]').type(fakeMail)
    cy.get('[data-qa="signup-button"]').click();

    cy.url().should('eq', 'https://automationexercise.com/signup');
    cy.location('pathname').should('eq', '/signup');
  });
});
