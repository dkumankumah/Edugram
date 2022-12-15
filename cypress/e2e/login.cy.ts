/// <reference types="cypress" />
describe("Login page test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it('Should open modal after login button is clicked', () => {
        cy.get("Button").click();
    })

    it('Should return an error when one inputfield is empty', () => {
        cy.get("Button").click();
        cy.get("[type=email]").type('daniel.kumankumah@hva.nl')
        cy.get("[type=submit]").click();
        cy.get('[data-cy=alert-description]').should('be.visible')

    })

    it('Should tell the user that credentials are wrong when one or more is wrong', () => {
        cy.get("Button").click();
        cy.get("[type=email]").type('daniel.kumankumah@hva.nl')
        cy.get("[type=email]").type('12345')
        cy.get("[type=submit]").click();
        cy.get('[data-cy=alert-description]').should('be.visible')

    })


    it('Should send a POST request with an existing body ', () => {
        cy.intercept('POST', '/login', {
            body: {
                email: 'daniel.kumankumah@hva.nl',
                password: '123456'
            }, headers : {

            }

        }).as('login')

        cy.get("Button").click();
        cy.get("[type=email]").type('daniel.kumankumah@hva.nl')
        cy.get("[type=password]").type('123456')
        cy.get("[type=submit]").click();
        cy.wait('@login').then((interception) => {
            assert.isNotNull(interception.response?.body, 'response has data')
            expect(interception.response?.body).contains({email: 'daniel.kumankumah@hva.nl', password: '123456'})
            assert.isNotNull(interception.response, 'response has data')
        })
    })



})

export {}
