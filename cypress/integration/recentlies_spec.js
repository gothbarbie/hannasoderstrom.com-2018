describe('/recently', () => {
  it('loads articles', () => {
    cy.visit('http://localhost:3000/recently')
    cy
      .get('[data-test=article]')
      .first()
      .should('be.visible')
  })

  it('opens article on click', () => {
    cy
      .get('[data-test=article]')
      .first()
      .click()
    cy.url().should('include', '/hello-world')
    cy.get('[data-test=article-title]').should('be.visible')
  })

  it('navigates back to articles', () => {
    cy.get('[data-test=back-link]').click()
    cy
      .get('[data-test=article]')
      .first()
      .should('be.visible')
  })
})
