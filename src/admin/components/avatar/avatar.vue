<template>
    <div class="avatar" :class="size">
        <div class="avatar__logo">
            <img :src="avatarUrl" :username="username" alt="" class="avatar__logo-img">
        </div>
        <div class="avatar__text">
            <p>{{ username }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheAvatar',
  data () {
    return {
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l'
    }
  },
  props: {
    avatarUrl: {
      type: String,
      required: true
    },
    username: {
      type: String
    },
    size: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
