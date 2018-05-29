describe('/external links', () => {
  it('shows clickable social media links', () => {
    cy.visit('http://localhost:3000')
    cy
      .get('[data-test=github-link]')
      .should('be.visible')
      .and('have.attr', 'href')
    cy
      .get('[data-test=linkedin-link]')
      .should('be.visible')
      .and('have.attr', 'href')
    cy
      .get('[data-test=medium-link]')
      .should('be.visible')
      .and('have.attr', 'href')
  })
})
