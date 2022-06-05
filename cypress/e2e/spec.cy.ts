describe('spec.cy.ts', () => {
  it('should visit', () => {
    cy.visit('http://localhost:3000/property/zoopla/glasgow')
    cy.get('h2').should('contain', '3 bed semi-detached house for sale')
  })
})
