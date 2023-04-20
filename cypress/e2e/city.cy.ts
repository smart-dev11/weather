describe('Navigation', () => {
  it('should display weather for Dallas', () => {
    cy.visit('http://localhost:3000/Dallas')

    cy.getByDataTestId('error').should('not.exist')
    cy.getByDataTestId('weather-card').should('exist')
    cy.getByDataTestId('location').should('exist').contains('Dallas')
  })

  it('should display Error for Wrong City', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/NonCity')

    cy.getByDataTestId('error').should('exist')
  })
})
