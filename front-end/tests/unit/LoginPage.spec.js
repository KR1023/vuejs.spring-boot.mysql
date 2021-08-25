import { shallowMount } from '@vue/test-utils'
import LoginPage from '@/views/LoginPage.vue'

describe('LoginPage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'TaskAgile'
    const wrapper = shallowMount(LoginPage, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
