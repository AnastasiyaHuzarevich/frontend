describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/')
  })

  it('contains items', () => {
    cy.visit('http://localhost:8081/')

    cy.contains('2 of 3 items')
  })

  it('complited', () => {
    cy.visit('http://localhost:8081/')

    cy.contains('Completed').click();
  })
  
  it('completed', () => {
    cy.visit('http://localhost:8081/')

    cy.get('#complited').click()
    
    cy.contains('2 of 2 items');
    
  })

  it('non completed', () => {
    cy.visit('http://localhost:8081/')

    cy.get('#non-complited').click()

    cy.contains('0 of 1 items');
  })

  it('show all', () => {
    cy.visit('http://localhost:8081/')

    cy.get('#all').click()

    cy.contains('2 of 3 items');
  })

  it('delete all completed', () => {
    cy.visit('http://localhost:8081/')

    cy.get('#delete').click()

    cy.contains('0 of 1 items');
  })


  it('should input items', () => {
    cy.visit('http://localhost:8081/')

    cy.get('#new-todo-item').type("Academic day{enter}")
    
    cy.contains('Academic day')
  })

})