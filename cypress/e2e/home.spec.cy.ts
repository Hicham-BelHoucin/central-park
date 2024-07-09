/// <reference types="cypress" />
// cypress/integration/home_spec.js
describe("Home Page", () => {
  beforeEach(() => {
    // Visit the home page
    cy.visit("http://localhost:3000/");
  });

  it("renders Points Earned section correctly", () => {
    // Check if the main containers are rendered
    cy.get("h6").contains("Customers' Points Earned Today");
    cy.get("h6").contains("Points Earned in the Last 7 Days");
    cy.get("h6").contains("Points Earned in the Last 30 Days");
  });

  it("renders Points Redeemed section correctly", () => {
    cy.get("h6").contains("Customers' Points Redeemed Today");
    cy.get("h6").contains("Points Redeemed in the Last 7 Days");
    cy.get("h6").contains("Points Redeemed in the Last 30 Days");
  });

  it("renders the Customers section correctly", () => {
    cy.get("h4").contains("Customer Points Earned Today");
    // Check if the user section is rendered
    cy.get('[data-testid="user-banner-1"]').should("exist");

    // Check if the user section has the correct data
    cy.get('[data-testid="user-banner-1"]').contains("john doe");
    cy.get('[data-testid="user-banner-1"]').contains("john@gmail.com");
  });
});
