import faker from 'faker'

describe('Scenarios where a authenticaded user is required', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.login()
  })
  it('CRUDs notes', () => {
    const noteDescription = faker.lorem.words(4)
    cy.addNewNote(noteDescription)
    cy.wait('@getNotes')

    const updatedNoteDescription = faker.lorem.words(4)
    cy.updateNote(noteDescription, updatedNoteDescription, true)
    cy.wait('@getNotes')

    cy.deleteNote(updatedNoteDescription)
    cy.wait('@getNote')
    cy.wait('@getNotes')
  })

  it('Successfully subit credit card form', () => {
    cy.intercept('POST', '**/prod/billing').as('paymentRequest')
    cy.fillSettingsFormAndSubmit()

    cy.wait('@getNotes')
    cy.wait('@paymentRequest').then(response => {
      expect(response.state).to.equal('Complete')
    })
  })

  it('logs out', { tags: '@desktop-and-tablet' }, () => {
    cy.visit('/')
    cy.wait(2000)
    // cy.wait('@getNotes')
    // if (Cypress.config('viewportWidth') < Cypress.env('viewportWidthBreakpoint')) {
    //   cy.get('.navbar-toggle.collapsed')
    //     .should('be.visible')
    //     .click()
    // }
    cy.get('.nav > :nth-child(2) > a').click()
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
  })
})
