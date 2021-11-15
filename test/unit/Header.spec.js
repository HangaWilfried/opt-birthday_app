import {mount} from '@vue/test-utils'
import Header from "../../src/components/Header";

describe('Header', () => {
    it('check if it\'s render without issues', () => {
        const total = 3
        const wrapper = mount(Header, {
            props: {
                total
            }
        })
        expect(wrapper.text()).toContain(3)
    })
    it('renders computed value getNextYear', () => {
        const nextYear = 2022
        const wrapper = mount(Header, {
            computed: {
                nextYear
            }
        })
        expect(wrapper.text()).toContain(2022)
    })
})
