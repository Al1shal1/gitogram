<template>
    <div class="avatar">
        <div class="avatar-logo">
            <img :src="avatarUrl" alt="" class="avatar-logo-img">
        </div>
        <div class="avatar-text">
            <p>{{ nickname }}</p>
        </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'avatar',
  props: {
    avatarUrl: String,
    nickname: String
  }
}
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
