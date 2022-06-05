it("displays correct headeing", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Welcome to the zapp!");
})