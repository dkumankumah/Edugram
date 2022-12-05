/// <reference types="cypress" />

describe("Testing register page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/register")
    })
  
    it('should have a title', () => {
        cy.get("h1").contains("Create your account");
    }),

    it('should find a register form and fill it in', () => {
        cy.get('#firstName').click().type("cypress");
        cy.get('#lastName').click().type("test");
        cy.get('#email').type("cypress@test.nl");
        cy.get('#password').type("cypressPassword");
        cy.get('#submitButton').click()
    })

    it('should have a Google sign in button', () => {
        cy.get('[data-cy=googleBtn]').should('be.visible')
    })
})

export {}
