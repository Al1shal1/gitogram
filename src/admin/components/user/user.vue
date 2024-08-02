<template>
    <div class="user">
      <avatar
        class="user-avatar"
        :avatarUrl="avatarUrl"
      ></avatar>
      <div>
        <div class="user-name">{{ username }}</div>
        <div v-if="type" class="user-type">{{ type }}</div>
      </div>
    </div>
  </template>

<script>
import { avatar } from '../avatar'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',
  components: {
    avatar
  },
  props: {
    avatarUrl: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      default: 'Default User'
    },
    type: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    return {}
  }
}
</script>

  <style src="./user.scss" scoped lang="scss"></style>
