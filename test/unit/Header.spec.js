import {mount} from '@vue/test-utils'
import Header from "../../src/components/Header";

describe('Header', () => {
    it('check if it\'s render without issues', () => {
        const totalOfBirth = 3
        const wrapper = mount(Header, {
            props: {
                totalOfBirth
            }
        })
        expect(wrapper.text()).toContain(3)
    })
    it('renders computed value getNextYear', () => {
        const getNextYear = 2022
        const wrapper = mount(Header, {
            computed: {
                getNextYear
            }
        })
        expect(wrapper.text()).toContain(2022)
    })
})
