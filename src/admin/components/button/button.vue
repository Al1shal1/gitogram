<template>
    <button
    :class="['c-button', `${theme}`, {'hover-text': withHoverText}
    ]"
    :data-hover-text="hoverText"
    >
    <div class="c-button__loader" v-if="loading">
      <spinner :color="white"></spinner>
    </div>
    <span class="btn-text">
      <slot></slot>
    </span>
    </button>
</template>

<script>
import { spinner } from '../../../components/loader'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'xButton',
  components: {
    spinner
  },
  data () {
    return {
      theme_grey: 'theme_grey',
      theme_green: 'theme_green',
      white: 'white'
    }
  },
  props: {
    theme: {
      type: String,
      default: 'theme_green'
    },
    hoverText: {
      type: String
    },
    loading: {
      type: Boolean
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style lang="scss" scoped src="./button.scss"></style>
