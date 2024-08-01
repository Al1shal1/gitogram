<template>
    <div class="wrapper">
        <header class="header">
            <div class="x-container">
                <button class="logo" @click="$router.push({name: 'feeds'})">
                    <logo :color="logo_white" />
                </button>
                <button class="close-btn" @click="$router.push({name: 'feeds'})">
                    <icon name="close" />
                </button>
            </div>
        </header>
        <div class="content">
            <TheStoriesSlider :initialSlide="Number($route.params.initialSlide)" />
        </div>
    </div>
</template>

<script>
import { TheStoriesSlider } from '../../components/storiesSlider'
import { icon } from '../../icon'
import { logo } from '../../icon/logo'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'stories',
  components: {
    TheStoriesSlider,
    logo,
    icon
  },
  data () {
    return {
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  }
}
</script>

<style src="./stories.scss" scoped lang="scss"></style>
