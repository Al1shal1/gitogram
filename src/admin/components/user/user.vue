<template>
    <div class="user">
      <avatar
        class="user__avatar"
        :avatarUrl="avatarUrl"
        :size="size"
      ></avatar>
      <div>
        <div class="user__name">{{ username }}</div>
        <div v-if="type" class="user__type">{{ type }}</div>
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
    },
    size: {
      type: String,
      default: 'avatar_m'
    }
  },
  setup (props) {
    return {}
  }
}
</script>

  <style src="./user.scss" scoped lang="scss"></style>
