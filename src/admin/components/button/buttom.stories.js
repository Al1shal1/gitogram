import xButton from './button.vue'
import { spinner } from '../../../components/loader'
export default {
  title: 'Button',
  component: { xButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    },
    theme: {
      options: ['theme_grey', 'theme_green'],
      control: { type: 'select' }
    }
  }
}

const template = (args) => ({
  components: { xButton },
  subcomponents: {
    spinner
  },
  data () {
    return { args }
  },
  template: `
    <xButton v-bind="args">Following</xButton>
    `
})

export const Default = template.bind({})
Default.args = {
  hoverText: 'Unfollow',
  theme: 'theme_green'
}
