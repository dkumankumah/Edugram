/// <reference types="cypress" />

describe("Testing overview page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/overview")
    })
    it('should find overview page with a x amount of tutors', () => {
        cy.get("h1").contains("Tutors found for");
    })

    it('should be able to click on cards', () => {
        cy.get('[data-cy=card').first().click()
    })

    it('should find radio buttons', () => {
        cy.get('[type="radio"]').check("Price", {force: true})
        cy.get('[type="radio"]').check("Response time", {force: true})
        cy.get('[type="radio"]').check("Name", {force: true})
    })

    it('Mocked API response', () => {
        cy.intercept("GET", '/', {fixtures:'../example.json'}).as('tutor')
        cy.visit("http://localhost:3000/overview")
        cy.log('test')
        console.log(cy);
    })

})

export {}
