<template>
    <div class="topline">
      <topline>
        <template #headline>
          <x-header></x-header>
        </template>
      </topline>
    </div>
    <div class="x-container container">
      <div class="wrapper">
        <div class="user">
          <div class="title">My profile</div>
          <about
            v-if="user.login"
            :userNickname="user.login"
            :username="user.name"
            :avatarUrl="user.avatar_url"
            :repos="user.public_repos"
            :following="followingQty"
          />
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>

<script>
import { xHeader } from '../../admin/components/xHeader'
import { topline } from '../../components/topline'
import { about } from '../../components/about'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'TheUser',
  components: {
    xHeader,
    topline,
    about
  },
  setup () {
    const { dispatch, state } = useStore()
    dispatch('starred/fetchStarred')
    return {
      user: computed(() => state.user.data),
      followingQty: computed(() => state.starred.data.length)
    }
  },
  data () {
    return {
      items: [],
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  }
}
</script>

  <style src="./user.scss" scoped lang="scss"></style>
