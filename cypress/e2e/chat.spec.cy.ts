/// <reference types="cypress" />
// cypress/integration/home_spec.js
describe("Chat Promotions Page", () => {
  beforeEach(() => {
    // Visit the home page
    cy.visit("http://localhost:3000/text-promotions");
  });

  it("renders Message Text Field", () => {
    // Check if the main containers are rendered
    cy.get("h6").contains("Send Promotion");

    cy.get("#\\:r1\\:").should("exist");
  });

  it("renders the Customers List correctly", () => {
    // Check if the user section is rendered
    cy.get('[data-testid="user-banner-1"]').should("exist");

    // Check if the user section has the correct data
    cy.get('[data-testid="user-banner-1"]').contains("john doe");
    cy.get('[data-testid="user-banner-1"]').contains("john@gmail.com");
  });
});
