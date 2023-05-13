///<reference types="cypress" />

describe('each example', () => {
  it('should log every item in navbar section', () => {
    cy.viewport('macbook-13');
    cy.visit('https://shopist.io/');
    cy.get('.navbar-section a').each(($el, index) => {
      const actualItem = $el.text();
      cy.log(actualItem);

      const expectedItem = ['chairs', 'sofas', 'bedding', 'lighting', 'my profile', 'cart'];
      
      // Check if actual item includes expected item
      expect(actualItem.toLowerCase()).to.include(expectedItem[index]);
    });
  });
});

