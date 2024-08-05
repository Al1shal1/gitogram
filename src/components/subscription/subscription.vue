<template>
    <div class="c-subscription">
      <div class="user">
        <user
          :type="type"
          :username="username"
          :avatarUrl="avatarUrl"
          :size="avatar_m"
        >
        </user>
      </div>
      <div class="button">
        <x-button class="xButton"
          :theme="following ? 'theme_green' : 'theme_grey'"
          :hoverText="following ? 'Unfollow' : 'Following'"
          @click="$emit(following ? 'onUnFollow' : 'onFollow', id)"
        >
          {{following ? "Following" : "Unfollow"}}
        </x-button>
      </div>
    </div>
  </template>

<script>
import { user } from '../../admin/components/user'
import { xButton } from '../../admin/components/button'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Subscription',
  components: {
    user,
    xButton
  },
  data () {
    return {
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l',
      hoverText: 'Unfollow',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  emits: ['onFollow', 'onUnFollow'],
  props: {
    loading: {
      type: Boolean
    },
    id: {
      type: Number
    },
    type: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    },
    following: {
      type: Boolean
    }
  }
}
</script>

  <style lang="scss" scoped src="./subscription.scss"></style>
