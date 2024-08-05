<template>
    <div class="с-auth">
      <div class="с-auth__top">
        <logo></logo>
        <div class="с-auth__content">More than just one repository.
          This is our digital world.</div>
        <button
          class="с-auth__btn"
          @click="redirectToGhAuth"
        >
          <span class="text">Authorize with github</span>
          <div class="icon icon-github">
            <icon name="github"></icon>
          </div>
        </button>
      </div>
      <div class="с-auth__bottom">
        <img src="../../assets/Macbook.png" alt="macbook" class="с-auth__img">
        <div class="copyright">© Gitogram from Loftschool</div>
      </div>
    </div>
  </template>

<script>
import { mapActions } from 'vuex'
import { logo } from '../../icon/logo'
import { icon } from '../../icon'
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'auth',
  components: {
    logo,
    icon
  },
  methods: {
    ...mapActions({
      redirectToGhAuth: 'auth/getAuthCode',
      authUserByCode: 'auth/authUserByCode'
    })
  },
  async mounted () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      const token = await this.authUserByCode(code)
      localStorage.setItem('token', token)
      axios.defaults.headers.Authorization = `token ${token}`
      this.$router.replace({ name: 'feeds', query: { search: '' } })
    }
  }
}
</script>

  <style src="./auth.scss" scoped lang="scss"></style>
