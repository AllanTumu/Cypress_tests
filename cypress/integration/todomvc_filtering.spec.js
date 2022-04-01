/// <reference types="cypress" />

describe('filtering', () => {
    beforeEach(() => {
        //Open page
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        //Enter new item to the list
        cy.get('.new-todo', {timeout: 6000}).type('Make Coffee{Enter}')
        cy.get('.new-todo', {timeout: 6000}).type('Sit down{Enter}')
        cy.get('.new-todo', {timeout: 6000}).type('Learn typescript{Enter}')
        
        cy.get(':nth-child(2) > .view > .toggle').click()
    })
    //Filters out the Active items and they should be 2 in total
    it('should filter "Active" todos', () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })
    //Filters out the Completed items and it should be 1 in total
    it('should filter "Completed" todos', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })
    //Filters out the All items and they should be 3 in total
    it('should filter "All" todos', () => {
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })
})