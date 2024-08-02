<template>
    <button class="c-story-user-item" @click="$emit('onPress')">
        <div class="avatar-wrap">
          <avatar :avatarUrl="avatarUrl" />
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>

<script>
import { avatar } from '../../admin/components/avatar'
export default {
  name: 'StoryUserItem',
  components: {
    avatar
  },
  emits: ['onPress'],
  props: {
    avatarUrl: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./StoryUserItem.scss"></style>
