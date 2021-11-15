import { mount } from '@vue/test-utils'
import Birth from '../../src/components/Birth.vue'

describe('Birth.vue', () => {
    it('render props when they are called', () => {
        const fullname = 'Hanga Lagoue Wilfried Junior'
        const deadline = 302
        const month = 'Dec'
        const date = 12
        const wrapper = mount(Birth, {
            props: {
                fullname,
                deadline,
                date,
                month
            }
        })
        expect(wrapper.text()).toContain('Hanga Lagoue Wilfried Juniornext Birth day: 12 Dec 2022less than 302 Days.')
    })

    it('check if event has been done', () => {
        const wrapper = mount(Birth)
        wrapper.find('.delete span').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('remove')
        expect(wrapper.emitted().remove).toHaveLength(1)
    })
})
