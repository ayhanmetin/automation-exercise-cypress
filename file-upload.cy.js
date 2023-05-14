///<reference types="cypress" />

describe('cypress file upload', () => {
  it.only('file upload example 1', () => {
    // Step 1: Navigate to the website
    cy.visit('https://www.qrcode-monkey.com/')
    
    // Step 2: Accept the cookie policy
    cy.get('#onetrust-accept-btn-handler').click();
    
    // Step 3: Click on the 'Add Logo Image' button
    cy.contains('Add Logo Image').click();
    
    // Step 4: Upload an image using the 'attachFile' method
    cy.get('.logo-preview').attachFile({filePath:"faker.png"}, {subjectType: 'drag-n-drop'})
    
    // Step 5: Verify the upload by checking the existence of 'Remove Logo' button
    cy.get('.btn-default').contains('Remove Logo');
  });

  it.only('file upload example 2', () => {
    // Step 1: Navigate to the website
    cy.visit('https://www.qrcode-monkey.com/')
    
    // Step 2: Accept the cookie policy
    cy.get('#onetrust-accept-btn-handler').click();
    
    // Step 3: Click on the 'Add Logo Image' button
    cy.contains('Add Logo Image').click();
    
    // Step 4: Define the file name
    const fileName = 'faker.png';
    
    // Step 5: Load the file from the fixtures folder and convert it to a blob
    cy.fixture('faker.png')
    .then(Cypress.Blob.base64StringToBlob) // convert the base64 string to a blob
    .then((fileContent) => {
      // Step 6: Upload the file using the 'attachFile' method
      cy.get('.logo-preview').attachFile({fileContent, fileName, mimeType:'image/**'}, {subjectType: 'drag-n-drop'})
      
      // Step 7: Verify the upload by checking the existence of 'Remove Logo' button
      cy.get('.btn-default').contains('Remove Logo');
      cy.get('.btn-default').click();
      cy.contains('No Logo');
    })
  });
});