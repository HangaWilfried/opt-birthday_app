import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'
import Birth from '../../src/components/Birth.vue'

import { nextTick } from 'vue'

describe('App.vue', () => {
    it('add and delete birth component', async () => {
        const wrapper = mount(App, {
            data () {
                return {
                    birthdays: []
                }
            }
        })
        expect(wrapper.findAllComponents(Birth).length).toBe(0)
        wrapper.vm.addNewBirthday({
            fullName: 'lagoue junior',
            dateOfBirth: {
                day: 'Sat',
                date: 27,
                month: 'May',
                year: 2000
            },
            randomColor: '#4287f5',
            getRemainingDays: 220
        })
        await nextTick()
        expect(wrapper.findAllComponents(Birth).length).toBe(1)
        wrapper.vm.addNewBirthday({
            fullName: 'junior dima',
            dateOfBirth: {
                day: 'Sat',
                date: 27,
                month: 'May',
                year: 2000
            },
            randomColor: '#4287f5',
            getRemainingDays: 220
        })
        await nextTick()
        expect(wrapper.findAllComponents(Birth).length).toBe(2)
        wrapper.vm.deleteBirthday(1)
        await nextTick()
        expect(wrapper.findAllComponents(Birth).length).toBe(1)
    })
})
