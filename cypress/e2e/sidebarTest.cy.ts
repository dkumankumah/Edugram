describe('SideBar', () => {
    it('should navigate to the Dashboard page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/dashboard')
        // cy.visit('https://example.cypress.io')

        // Find a link with an href attribute containing "dashboard" and click it
        // cy.get('a[href*="/"]').click()

        // The new url should include "/about"
        cy.url().should('include', '/dashboard')

        // The new page should contain an h1 with "Dashboard page"
        cy.get('h1').contains('Dashboard is here Page')
    })
})

describe('SideBar', () => {
    it('should navigate to the Tickets page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/dashboard')

        // Find a link with an href attribute containing "tickets" and click it
        cy.get('a[href*="/tickets"]').click()

        // The new url should include "/tickets"
        cy.url().should('include', '/tickets')

        // The new page should contain an h1 with "Dashboard page"
        cy.get('h1').contains('Tickets is here Page')
    })
})
