/// <reference types="cypress" />

describe("Testing overview page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/search/Programmeren")
    })
    it('should find overview page with a x amount of tutors', () => {
        cy.get("h1").contains("Tutors found for");
    })

    it('should be able to click on cards', () => {
        cy.get('[data-cy=card').first().click()
    })

    it('should be able to sort by different option', () => {
        cy.get('[type="radio"]').check("Price", {force: true})
        cy.get('[type="radio"]').check("Response time", {force: true})
        cy.get('[type="radio"]').check("Name", {force: true})
    })

    it('Mocked API response', () => {
        cy.intercept("GET", '/', {fixtures:'../example.json'}).as('tutor')
        cy.visit("http://localhost:3000/search/Programmeren")
        cy.log('test')
        console.log(cy);
    })

    it('should search for a different subject by keyevent', () => {
        cy.get('#searchfield').click().type("Wiskunde");
        cy.get('#searchfield').trigger('keydown', { keyCode: 13})
        cy.wait(500);
        cy.get("h1").contains("Wiskunde");
    })

    it('should look for a different subject by clicking on the search icon ', () => {
        cy.get('#searchfield').click().type("Wiskunde");
        cy.get('#iconButton').click();
        cy.wait(500);
        cy.get("h1").contains("Wiskunde");
    })

})

export {}
