import { mount } from '@vue/test-utils'
import ToDoItem from "@/components/ToDoItem";

describe('ToDoItem', () => {
    it('Check elements', async () => {
        const wrapper = mount(ToDoItem)
        // button
        expect(wrapper.find('button').exists()).toBeTruthy()
        //  label
        expect(wrapper.find('label').exists()).toBeTruthy()
        // input
        expect(wrapper.find('input').exists()).toBeTruthy()
    })
})

