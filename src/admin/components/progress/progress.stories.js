
import indicator from './progress.vue'

export default {
  title: 'indicator',
  component: indicator,
  ArgTypes: {
    onFinish: {
      action: 'onFinish'
    }
  }

}

const template = (args) => ({
  components: { indicator },
  data () {
    return { args }
  },
  template: `
      <indicator @onFinish="args.onFinish" />
      `
})

export const Default = template.bind({})
