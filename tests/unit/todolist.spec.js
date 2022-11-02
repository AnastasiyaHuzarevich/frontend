import {mount} from '@vue/test-utils'
import ToDoList from "@/components/ToDoList";

describe('ToDoList', () => {
    it('Check elements', async () => {
        const wrapper = mount(ToDoList)
        //  label
        expect(wrapper.find('label').exists()).toBeTruthy()
        // input
        expect(wrapper.find('input').exists()).toBeTruthy()
    })
})

