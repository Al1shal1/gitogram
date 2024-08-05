<template>
    <header class="c-header">
      <logo :color="logo_black"
            @click="$router.push({ name: 'feeds' })"
      ></logo>
      <div class="buttons">
        <button class="btn-item icon icon_home"
                @click="$router.push({ name: 'feeds' })">
          <icon name="home"></icon>
        </button>
        <button class="avatar"
                @click="$router.push({ name: 'repos' })">
          <avatar
            :avatarUrl="user.avatar_url"
            class="avatar_user"></avatar>
        </button>
        <button class="btn-item icon icon_logout"
                @click="logout">
          <icon name="out"></icon>
        </button>
      </div>
    </header>
  </template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { icon } from '../../../icon'
import { logo } from '../../../icon/logo'
import { avatar } from '../avatar'
export default {
  name: 'xHeader',
  components: {
    icon,
    logo,
    avatar
  },
  data () {
    return {
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data
    }),
    ...mapGetters({
      hasUser: 'user/hasUser'
    })
  },
  methods: {
    ...mapActions({
      logoutAction: 'auth/logout',
      getUser: 'user/getUser'
    }),
    logout () {
      localStorage.removeItem('token')
      this.$router.replace({ name: 'auth' })
      window.location.reload()
    }
  },
  created () {
    this.getUser()
  }
}
</script>

  <style lang="scss" scoped src="./xHeader.scss"></style>
