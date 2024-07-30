<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <slot name="post"/>
    <div class="content">
        <div class="title">{{ title }}</div>
        <div class="text" :if="description">{{ description }}</div>
        <div class="buttons">
            <div class="mark">
                <icon name="star" class="star"/>
                    Star
            </div>
            <div class="stars">{{ stars }}k</div>
            <div class="forks">
                <icon name="fork" class="fork" /> Fork
            </div>
            <div class="amount">{{ forks }}</div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icon'

export default {
  name: 'ThePost',
  components: {
    icon
  },
  props: {
    title: String,
    username: String,
    stars: Number,
    forks: Number,
    description: String
  }
}
</script>

<style lang="scss" src="./post.scss" scoped></style>
