
import { mount } from '@vue/test-utils'
import Form from '../../src/components/Form.vue'

describe('Form.vue', () => {
    it('will call with all values', () => {
        const lastName = 'lagoue'
        const firstName = 'junior'
        const birthInfo = '2000-05-27'
        const wrapper = mount(Form, {
            data () {
                return {
                    lastName,
                    firstName,
                    birthInfo,
                    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    colors: ['#4287f5', '#b771e3', '#6e0e4c', '#0e6e4b', '#28c78d', '#80d983', '#a5d980', '#cfd980', '#d9cd80', '#d9b480', '#d99b80']
                }
            }
        })
        wrapper.vm.getRandomColor = jest.fn(() => '#4287f5')
        wrapper.vm.getRemainingDays = jest.fn(() => 220)
        wrapper.vm.submit()
        expect(wrapper.emitted().submit[0]).toEqual([
            {
                fullName: 'lagoue junior',
                dateOfBirth: {
                    day: 'Sat',
                    date: 27,
                    month: 'May',
                    year: 2000
                },
                randomColor: '#4287f5',
                getRemainingDays: 220
            }])
    })
})
