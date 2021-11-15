import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'
import Birth from '../../src/components/Birth.vue'

import { nextTick } from 'vue'

describe('App.vue', () => {
    it('add and delete birth component', async () => {
        const wrapper = mount(App, {
            data () {
                return {
                    Births: []
                }
            }
        })
        expect(wrapper.findAllComponents(Birth).length).toBe(0)
        wrapper.vm.addToBirthDayList({
            fullname: 'lagoue junior',
            birth: {
                day: 'Sat',
                date: 27,
                month: 'May',
                year: 2000
            },
            randColor: '#4287f5',
            deadline: 220
        })
        await nextTick()
        expect(wrapper.findAllComponents(Birth).length).toBe(1)
        wrapper.vm.addToBirthDayList({
            fullname: 'junior dima',
            birth: {
                day: 'Sat',
                date: 27,
                month: 'May',
                year: 2000
            },
            randColor: '#4287f5',
            deadline: 220
        })
        await nextTick()
        expect(wrapper.findAllComponents(Birth).length).toBe(2)
        wrapper.vm.deleteFromItem(1)
        await nextTick()
        expect(wrapper.findAllComponents(Birth).length).toBe(1)
    })
})
