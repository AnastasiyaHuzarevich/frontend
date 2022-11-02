import ToDoList from './ToDoList.vue'

describe('<ToDoList />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ToDoList)
  })
})