// frontend/cypress/e2e.spec.js
describe("Full-Stack Project E2E Tests", () => {
  it("Loads the application and navigates between days", () => {
    cy.visit("http://localhost:3000/"); // Replace with your actual development server URL

    // Verify the page title and content
    cy.contains("h1", "List of Your Diet / Day 1");

    // Verify that the "Back" button is hidden on the first day
    cy.get("button").contains("Back").should("not.be.visible");

    // Click the "Next Day" button and verify the day changes
    cy.get("button").contains("Next Day").click();
    cy.contains("h1", "List of Your Diet / Day 2");

    // Click the "Next Day" button again and verify the day changes
    cy.get("button").contains("Next Day").click();
    cy.contains("h1", "List of Your Diet / Day 3");
  });
});
