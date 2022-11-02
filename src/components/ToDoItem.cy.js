import ToDoItem from './ToDoItem.vue'

describe('<ToDoItem />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ToDoItem)
  })
})