/// <reference types="cypress" />

describe("example", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/example")
  })
  it('should find example page and its title', () => {
    cy.get("h1").contains("example");
  })
})

export {}
