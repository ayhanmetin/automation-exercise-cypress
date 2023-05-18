///<reference types="cypress" />

describe('web scrapping', () => {
  it('', () => {
    cy.visit('https://shopist.io/department/sofas');
    cy.get('.description').as('sofaPrice').its('length').should('eq', 9);

    const result = [];

    cy.get('@sofaPrice').each(($el, index) => {
      cy.log(`Result ${index} - ${$el.text()}`)
      result.push($el.text());
    }).then(() =>{
      cy.writeFile('writeFile/webScrapping.txt', result);
    })
  });
});

/* 
writeFile/webScrapping.txt:
[
  "Grey Tufted Couch $850.00",
  "Brown Leather Couch $1200.00",
  "Minimalist White Sofa $720.00",
  "Patterned Blue Couch $410.00",
  "Grey Tufted Couch $610.00",
  "Classic Grey Sofa $410.00",
  "Tall Tufted Couch $710.00",
  "Ivory Covertible Sofa $510.00",
  "Black Velvet Sectional $1450.00"
]
*/