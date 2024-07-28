<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <slot name="post"/>
    <div class="content">
        <div class="title">Vue.js</div>
        <div class="text"><b>JavaScript</b> framework for building interactive web applications ⚡</div>
        <div class="buttons">
            <div class="mark">
                <icon name="star" />
                    Star
            </div>
            <div class="wiews">156k</div>
            <div class="fork">
                <icon name="fork" /> Fork
            </div>
            <div class="amount">4</div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icon'

export default {
  name: 'ThePost',
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./post.scss" scoped></style>
