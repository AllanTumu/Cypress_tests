/// <reference types="cypress" />

/// it function accepts two parameters
/// The cy object is the gateway to all cypress functionality
describe('todo actions', ()=> {
    // Open the todomvc app before each test
    beforeEach(() => {
        //Open page
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        //Enter new item to the list
        cy.get('.new-todo', {timeout: 6000}).type('Learn cypress{Enter}')
        
    })

    it('should add a new item to list', () => {
        
        // Validate if element contains certain text
        cy.get('label').should('have.text', 'Learn cypress')
        // Verify that toogle is not checked
        cy.get('.toggle').should('not.be.checked')
    
    })
    
    it('should mark todo as completed', () => {
        //Mark task as done by clicking it
        cy.get('.toggle').click()
        // Verify that toggle was checket
        cy.get('.toggle').should('be.checked')
        // Verify that text decoration is line through
        cy.get('label').should('have.css', 'text-decoration-line','line-through')
    })
    
    it('should clear completed todos', () => {
        //Mark task as done by clicking it
        cy.get('.toggle').click()
        //Clear list by clicking Clear completed
        //We are using .contains and not .get
        cy.contains('Clear complete').click()
        //Validate that todo list doesn't have any item
        cy.get('.todo-list').should('not.have.descendants','li')
    })
})

