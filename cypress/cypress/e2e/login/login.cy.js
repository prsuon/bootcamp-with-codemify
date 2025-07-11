/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('user should be able to log in', () => {
    cy.get('[href="/auth/login"]').should('be.visible').click()
    cy.get('[name="email"]').should('be.visible').type('admin@gmail.com')
    cy.get('[name="password"]').should('be.visible').type('DontTestMe')
    cy.contains("Login").should('be.visible').click()

    cy.get('a p').should('have.text', 'role: admin')
    cy.title().should('eq', 'User: Profile | Delek Homes')

    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  // it('can add new todo items', () => {
  //   const newItem = 'Feed the cat'
  //   cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
  //   cy.get('.todo-list li')
  //     .should('have.length', 3)
  //     .last()
  //     .should('have.text', newItem)
  // })

  // it('can check off an item as completed', () => {
  //   cy.contains('Pay electric bill')
  //     .parent()
  //     .find('input[type=checkbox]')
  //     .check()
  //   cy.contains('Pay electric bill')
  //     .parents('li')
  //     .should('have.class', 'completed')
  // })

  // context('with a checked task', () => {
  //   beforeEach(() => {
  //     cy.contains('Pay electric bill')
  //       .parent()
  //       .find('input[type=checkbox]')
  //       .check()
  //   })

  //   it('can filter for uncompleted tasks', () => {
  //     cy.contains('Active').click()
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Walk the dog')
  //     cy.contains('Pay electric bill').should('not.exist')
  //   })

  //   it('can filter for completed tasks', () => {
  //     cy.contains('Completed').click()

  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Pay electric bill')

  //     cy.contains('Walk the dog').should('not.exist')
  //   })

  //   it('can delete all completed tasks', () => {
  //     cy.contains('Clear completed').click()

  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .should('not.have.text', 'Pay electric bill')

  //     cy.contains('Clear completed').should('not.exist')
  //   })
  // })
})
