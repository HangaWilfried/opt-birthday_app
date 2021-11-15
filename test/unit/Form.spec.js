
import { mount } from '@vue/test-utils'
import Form from '../../src/components/Form.vue'

describe('Form.vue', () => {
    it('will call with all values', () => {
        const lastname = 'lagoue'
        const firstname = 'junior'
        const fullbirth = '2000-05-27'
        const wrapper = mount(Form, {
            data () {
                return {
                    lastname,
                    firstname,
                    fullbirth,
                    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    colors: ['#4287f5', '#b771e3', '#6e0e4c', '#0e6e4b', '#28c78d', '#80d983', '#a5d980', '#cfd980', '#d9cd80', '#d9b480', '#d99b80']
                }
            }
        })
        wrapper.vm.getRandomColor = jest.fn(() => '#4287f5')
        wrapper.vm.getDeadLine = jest.fn(() => 220)
        wrapper.vm.saveBirthInfo()
        expect(wrapper.emitted().addBirthDay[0]).toEqual([
            {
                fullname: 'lagoue junior',
                birth: {
                    day: 'Sat',
                    date: 27,
                    month: 'May',
                    year: 2000
                },
                randColor: '#4287f5',
                deadline: 220
            }])
    })
})
