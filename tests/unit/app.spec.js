import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'



describe('App', () => {
    it('All items', async () => {
        // const wrapper = shallowMount(App, {
        //     propsData: {
        //         label: 'Vue Project'
        //     }
        // })
        const mock = new MockAdapter(axios)
        const wrapper = mount(App)
        const buttonAll = wrapper.find('button')
        await buttonAll.trigger('click')
        expect(wrapper.text()).toContain('1 of 4 items')

    })

    it('Complited', async () => {
        const wrapper = mount(App)
        const button = wrapper.find('#complited')


        await button.trigger('click')
        expect(wrapper.text()).toContain('1 of 1 items')


    })

    it('Non-complited', async () => {
        const wrapper = mount(App)
        const button = wrapper.find('#non-complited')
        await button.trigger('click')
        expect(wrapper.text()).toContain('0 of 3 items')


    })

    it('Delete', async () => {
        const wrapper = mount(App)
        await wrapper.find('#delete').trigger('click')
        expect(wrapper.text()).toContain('0 of 3 items')


    })

    // it('Add', async () => {
    //     const wrapper = mount(App,{
    //         propsData:{
    //             label: "Vue"
    //         }
    //     })
    //     const input = 'eat'
    //     const button = wrapper.find('to-do-item')
    //     await wrapper.find("to-do-item").setValue(input)
    //
    //     await button.setValue('click')
    //
    //     expect(wrapper.text()).toContain('0 of 3 items')
    //
    //
    // })

    it('Check item', async () => {
        const wrapper = mount(App)
        expect(wrapper.html()).toContain('JavaScript')
    })

    it('Add function', async () => {

        const wrapper = mount(App)

        wrapper.vm.addToDo('smth');

        expect(wrapper.vm.$data.toDoItems).toHaveLength(5);
    })

    it('delete function', async () => {

        const wrapper = mount(App)

        wrapper.vm.deleteComplited();

        expect(wrapper.vm.$data.toDoItems).toHaveLength(3);
    })

    it('delete complited', async () => {
        const wrapper = mount(App)
        const buttonAll = wrapper.find('#all')
        const button = wrapper.find('#complited')

        await button.trigger('click')
        await wrapper.find('#delete').trigger('click')
        await buttonAll.trigger('click')

        expect(wrapper.text()).toContain('0 of 3 items');
    })
    it('delete active', async () => {
        const wrapper = mount(App)
        const buttonAll = wrapper.find('#all')
        const button = wrapper.find('#non-complited')

        await button.trigger('click')
        await wrapper.find('#delete').trigger('click')
        await buttonAll.trigger('click')

        expect(wrapper.text()).toContain('0 of 3 items');
    })
})

