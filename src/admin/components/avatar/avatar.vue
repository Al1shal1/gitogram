<template>
    <div class="avatar">
        <div class="avatar-logo">
            <img :src="avatarUrl" :username="username" alt="" class="avatar-logo-img">
        </div>
        <div class="avatar-text">
            <p>{{ username }}</p>
        </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'avatar',
  props: {
    avatarUrl: {
      type: String,
      required: true
    },
    username: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
