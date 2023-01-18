/// <reference types="cypress" />
describe("Login page test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it('Should open modal after login button is clicked', () => {
        cy.get('[data-cy="loginButton"]').click();
    })

    it('Should return an error when one inputfield is empty', () => {
        cy.get('[data-cy="loginButton"]').click();
        cy.get("[type=email]").type('daniel.kumankumah@hva.nl')
        cy.get("[type=submit]").click();
        cy.get('[data-cy=alert-description]').should('be.visible')

    })

    it('Should tell the user that credentials are wrong when one or more is wrong', () => {
        cy.get('[data-cy="loginButton"]').click();
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

        cy.get("[data-cy=loginButton]").click();
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
/// <reference types="cypress" />

import {decodeJWT} from "../../src/pages/api/api.storage";

describe('Local Storage', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE1ZmUxZmY3OGUyYWQyNzVjZTkwZCIsImZpcnN0TmFtZSI6ImRhbm55IiwibGFzdE5hbWUiOiJuYW5zaW5rIiwicm9sZSI6InR1dG9yIiwiaWF0IjoxNjcxMDk4Njc5fQ.7p9y78z9z87FcOTiK3HJ83Nv4mq5E0jCU-mEWG4-NLA'

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it('should visit profile page and send back to login because authenticated is false', function () {
        cy.visit('http://localhost:3000/profile')
        cy.wait(2000)
        cy.location('href').should('equal', 'http://localhost:3000/')
        cy.location('href').should('not.equal', 'http://localhost:3000/profile')

    });

    it('should visit profile page and work because token exists', function () {
        localStorage.setItem('token', token)
        cy.visit('http://localhost:3000/profile')
        cy.location('href').should('equal', 'http://localhost:3000/profile')

    });

    it('should expect fields to be empty when visiting profile page', function () {
        localStorage.setItem('token', token)
        cy.visit('http://localhost:3000/profile')
        cy.intercept('GET', '/tutor*', [{"firstName": 'Danny'}]).as('getProfile')
        cy.location('href').should('equal', 'http://localhost:3000/profile')

        //Check if al fields are empty on visiting the profile page
        cy.get('[data-cy="firstName"]').should('have.value', '')
        cy.get('[data-cy="lastName"]').should('have.value', '')
        cy.get('[data-cy="birthDate"]').should('have.value', '')
        cy.get('[data-cy="email"]').should('have.value', '')
        cy.get('[data-cy="phoneNumber"]').should('have.value', '')
    });

    // it('Fake the get request and put the fake returned value in the firstName input value', function () {
    //     localStorage.setItem('token', token)
    //     cy.visit('http://localhost:3000/profile')
    //     cy.intercept('GET', 'http://localhost:8000/tutor/' + decodeJWT().id, {"firstName": 'Danny'}).as('asProfile')
    //     cy.wait('@asProfile').then((interception) => {
    //         assert.isNotNull(interception.response?.body, 'response has data')
    //         expect(interception.response?.body).eql({"firstName": 'Danny'})
    //         cy.get('[data-cy="firstName"]').type(interception.response?.body.firstName)
    //         cy.get('[data-cy="firstName"]').should('have.value', 'Danny')
    //     })
    // });
})
export {}
