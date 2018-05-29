describe('/navigation', () => {
  it('loads home page by default', () => {
    cy.visit('http://localhost:3000')
    cy
      .get('[data-test=title]')
      .should('be.visible')
      .contains("Hi there, I'm Hanna!")
  })

  it('underlines the home nav item', () => {
    cy.get('[data-test=home-link]').should('have.attr', 'active')
  })

  it('opens recently when clicking the recently nav item', () => {
    cy
      .get('[data-test=recently-link]')
      .first()
      .click()
    cy.url().should('contain', '/recently')
  })

  it('underlines the recently nav item', () => {
    cy.get('[data-test=recently-link]').should('have.attr', 'active')
  })

  it('opens experience when clicking the experience nav item', () => {
    cy.visit('http://localhost:3000')
    cy
      .get('[data-test=experience-link]')
      .first()
      .click()
    cy.url().should('contain', '/experience')
  })

  it('underlines the experience nav item', () => {
    cy.get('[data-test=experience-link]').should('have.attr', 'active')
  })

  it('opens contact when clicking the contact nav item', () => {
    cy.visit('http://localhost:3000')
    cy
      .get('[data-test=contact-link]')
      .first()
      .click()
    cy.url().should('contain', '/contact')
  })

  it('underlines the contact nav item', () => {
    cy.get('[data-test=contact-link]').should('have.attr', 'active')
  })

  it('opens home when clicking the home nav item', () => {
    cy.visit('http://localhost:3000')
    cy
      .get('[data-test=home-link]')
      .first()
      .click()
    cy.url().should('contain', 'http://localhost:3000/')
    cy
      .get('[data-test=title]')
      .should('be.visible')
      .contains("Hi there, I'm Hanna!")
  })
})
