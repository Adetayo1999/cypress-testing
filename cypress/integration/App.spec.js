import React from "react";

describe("Complete end to end tests", () => {
  it("Looks for hello world", () => {
    cy.visit("/");
    cy.contains("Hello");
    cy.contains("0 count");
    cy.contains("increment").click();
    cy.contains("1 count");
    cy.contains("decrement").click();
    cy.contains("0 count");
  });
});
