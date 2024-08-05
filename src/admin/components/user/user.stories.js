import { user } from '../user'
import { avatar } from '../avatar'

export default {
  title: 'user',
  components: { user },
  subcomponents: {
    avatar
  },
  argTypes: {
    avatarUrl: { type: 'text' },
    username: { type: 'text' }
  }
}

const template = (args) => ({
  components: {
    user,
    avatar
  },
  data () {
    return {
      args
    }
  },
  template: `
    <user :avatarUtl="args.avatarUrl" :username="args.username"></user>
  `
})

export const Default = template.bind({})
Default.args = {
  avatarUrl: 'https://i.pinimg.com/236x/55/67/c7/5567c77f407118991c19f34cdb36358a.jpg',
  username: 'Default Name'
}
