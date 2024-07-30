
import avatar from './avatar.vue'

export default {
  title: 'avatar',
  component: { avatar }
}

const template = () => ({
  components: { avatar },
  template: `
    <avatar 
    avatarUrl="https://i.pinimg.com/236x/55/67/c7/5567c77f407118991c19f34cdb36358a.jpg"
    nickname="John" />
    `
})
export const Default = template.bind({})
