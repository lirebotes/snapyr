/// <reference types="cypress" />

describe('Tic Tac Toe App', () => {
    beforeEach(() => {
        cy.visit('../../tic-tac-toe/dist/index.html')
    })

    it('displays nine empty boxes by default', () => {
        cy.get('.block').should('have.length', 9)
        for (let index = 1; index < 9; index++) {
            cy.get(`:nth-child(${index}) > .block > span`).should('not.be.visible')
        }
    })

    it('can add an O', () => {
        click_box([1])
        cy.get(':nth-child(1) > .block > span').should('contain.text', 'O')
        cy.get(':nth-child(1) > .block > span').should('be.visible')
    })

    it('can add an X', () => {
        click_box([1, 2])
        cy.get(':nth-child(2) > .block > span').should('contain.text', 'X')
        cy.get(':nth-child(2) > .block > span').should('be.visible')
    })

    it('should be immutable', () => {
        click_box([1, 1])
        cy.get(':nth-child(1) > .block > span').should('contain.text', 'O')
        cy.get(':nth-child(1) > .block > span').should('be.visible')
    })

    it('can let O win', () => {
        click_box([1, 2, 4, 5, 7])
        cy.get('h2').should('contain.text', "Win")
        cy.get('h2').parent().should('be.visible')
    })

    it('can let O win', () => {
        click_box([1, 2, 3, 5, 7, 8])
        cy.get('h2').should('contain.text', "Win")
        cy.get('h2').parent().should('be.visible')
    })

    it('can tie', () => {
        click_box([1, 2, 5, 3, 6, 4, 7, 9, 8])
        cy.get('h2').parent().should('not.be.visible')
    })
})

function click_box(order) {
    order.forEach(number => {
        cy.get(`:nth-child(${number}) > .block`).click()
    });
}

