///<reference types="cypress" />

describe('cypress file upload', () => {
  it('file upload example 1', () => {
    cy.visit('https://www.qrcode-monkey.com/')
    cy.getCookies().should('have.length', 8);
    cy.getCookie('_uetsid').then((cookie) => {
      expect(cookie.value).to.eq("d50e99f0f42e11eda8ad7f12edba9126");
    })
  });
});