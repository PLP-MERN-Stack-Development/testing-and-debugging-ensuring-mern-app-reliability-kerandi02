 // ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command for login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Custom command for logout
Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="logout-button"]').click();
});

// Custom command to check if user is logged in
Cypress.Commands.add('checkLoggedIn', () => {
  cy.window().its('localStorage.token').should('exist');
});

// Custom command to clear database (mock)
Cypress.Commands.add('clearDatabase', () => {
  // This would typically call a backend endpoint to clear test data
  cy.request('POST', 'http://localhost:5000/api/test/clear-database');
});

// Custom command to seed database (mock)
Cypress.Commands.add('seedDatabase', (data) => {
  cy.request('POST', 'http://localhost:5000/api/test/seed-database', data);
});