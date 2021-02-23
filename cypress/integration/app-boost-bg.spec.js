context('Test app.boost.bg login page', () => {
    it('should visit baseUrl', () =>{
        cy.visit(Cypress.config().baseUrl);  
    })

    it('login form should be visible', () =>{
        cy.get('.v-form').should('be.visible')
    })

    it('login form should have two input fields', () =>{
        cy.get('.v-form input').should('have.length', 2)
    })

    it('should login button exist', () =>{
        cy.get('.v-btn')
    })
})