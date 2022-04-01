/// <reference types="cypress" />

/// it function accepts two parameters
/// The cy object is the gateway to all cypress functionality
it('should add item to todo', () => {
    //Open page
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    //Enter task
    cy.get('.new-todo', {timeout: 6000}).type('Learn cypress{Enter}')
    //Mark task as done by clicking it
    cy.get('.toggle').click()
    //Clear list by clicking Clear completed
    //We are using .contains and not .get
    cy.contains('Clear complete').click()
})