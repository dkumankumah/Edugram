/// <reference types="cypress" />
import {headers} from "next/headers";

describe("Testing overview page", () => {
    beforeEach(() => {
        cy.intercept("GET", 'http://localhost:3000/search/Programmeren', {
            "_id": "1",
                "firstName": "Okechukwu",
                "lastName": "Onwunli",
                "email": "okechukwu.onwunli@hva.nl",
                "password": "123456",
                "__v": 0,
                "role": "tutor",
                "course": [
                {
                    "subject": "Programmeren",
                    "fee": 37
                }
            ], headers: {"Content-type": "text/html"}
        })
        cy.visit("http://localhost:3000/search/Programmeren")
    })
    it('should find overview page with a x amount of tutors', () => {
        cy.get('[data-cy="tutorheader"]');
    })
    //
    // it('should be able to click on cards', () => {
    //     cy.get('[data-cy=card').first().click()
    // })
    //
    // it('should be able to sort by different option', () => {
    //     cy.get('[type="radio"]').check("Price", {force: true})
    //     cy.get('[type="radio"]').check("Response time", {force: true})
    //     cy.get('[type="radio"]').check("Name", {force: true})
    // })
    //
    // // it('Mocked API response', () => {
    // //     cy.intercept("GET", '/', {fixtures:'../example.json'}).as('tutor')
    // //     cy.visit("http://localhost:3000/search/Programmeren")
    // //     cy.log('test')
    // //     console.log(cy);
    // // })
    //
    // it('should search for a different subject by keyevent', () => {
    //     cy.get('#searchfield').click().type("Wiskunde");
    //     cy.get('#searchfield').trigger('keydown', { keyCode: 13})
    //     cy.wait(500);
    //     cy.get("h1").contains("Wiskunde");
    // })
    //
    // it('should look for a different subject by clicking on the search icon ', () => {
    //     cy.get('#searchfield').click().type("Wiskunde");
    //     cy.get('#iconButton').click();
    //     cy.wait(500);
    //     cy.get("h1").contains("Wiskunde");
    // })

})

export {}
