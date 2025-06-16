import indicator from './progress.vue'

export default {
  title: 'indicator',
  component: indicator,
  ArgTypes: {
    onProgressFinish: {
      action: 'onProgressFinish'
    }
  }

}

const template = (args) => ({
  components: { indicator },
  data () {
    return { args }
  },
  template: `
      <indicator @onProgressFinish="args.onProgressFinish" />
      `
})

export const Default = template.bind({})
