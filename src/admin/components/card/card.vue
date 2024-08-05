<template>
    <div class="card">
      <div class="card__title-wrap">
        <h2 class="card__title">{{ title }}</h2>
      </div>
      <div class="card__desc">
        {{ description }}
      </div>
      <div class="card__stats">
        <stats :stars="stars" :forks="forks"></stats>
      </div>
    </div>
  </template>

<script>
import { stats } from '../../../admin/components/stats'
export default {
  name: 'TheCard',
  components: {
    stats
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
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
  }
}
</script>

  <style src="./card.scss" lang="scss" scoped></style>
