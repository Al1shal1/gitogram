<template>
    <div class="stats">
      <div class="stats__border stats__left">
        <div class="stats__icon icon">
          <icon name="star"></icon>
        </div>
        <span>Star</span>
      </div>
      <div class="stats__border">
        {{ stars }}
      </div>
      <div class="stats__border stats__center" >
        <div class="stats__icon icon">
          <icon name="fork"></icon>
        </div>
        <span>Fork</span>
      </div>
      <div class="stats__border stats__right">
        {{ forks }}
      </div>
    </div>
  </template>

<script>
import { icon } from '../../../icon'

export default {
  name: 'TheStats',
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      default: 0,
      required: true
    },
    forks: {
      type: Number,
      default: 0,
      required: true
    }
  },
  setup () {
    return {}
  }
}
</script>

  <style src="./stats.scss" scoped lang="scss"></style>
