import App from './App.vue'

describe('<App />', () => {
  it('should contain list', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
    cy.get('body')
    cy.contains('Code')
  }) 
  
  it('should delete', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
    cy.get('#delete').click()
    cy.contains('0')
  }) 
  
  it('should show complited', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
    cy.get('#complited').click()
    cy.contains('1 of 1 items')
  })
  
  it('should show not complited', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
    cy.get('#non-complited').click()
    cy.contains('0 of 3 items')
  })
  
  it('should show all', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
    cy.get('#all').click()
    cy.contains('1 of 4 items')
  })
  
  it('should delete items from completed list', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
    cy.get('#complited').click()
    cy.get('#delete').click()
    cy.get('#all').click()
    cy.contains('0 of 3 items')
  })

  it('should input items', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
    cy.get('#new-todo-item').type("Academic day{enter}")
    cy.contains('Academic day')
  })
  
  it('should input items false', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
    cy.get('#new-todo-item').type("Academic day{enter}")
    cy.contains('1 of 4 items')
  })
})