///<reference types="cypress" />

/* pageObjectModel/homepage.js
export class Homepage {
  navigate() {
  cy.visit('https://cypress.io');
  }
*/

import { Homepage } from "../../pageObjectModel/homepage";
const homepage = new Homepage();

describe('page object model', () => {
  it('page object mode example', () => {
    homepage.navigate();
  });
});
