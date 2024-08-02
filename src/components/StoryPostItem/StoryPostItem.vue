<template>
    <div class="c-story-post-item" :class="{ active }">
        <div class="stories-container">
            <div class="header">
                <div class="progress">
                    <indicator  :active="active"
                    @onFinish="$emit('onProgressFinish')" />
                </div>
                <div class="user">
                    <user
                    :avatarUrl="avatarUrl"
                    :username="username" />
                </div>
            </div>
            <div class="content">
                <div class="loader" v-if="loading">
                        <spinner />
                    </div>
                <div class="info" v-else>
                    <div
                        v-if="content && content.length"
                        class="content-text"
                        v-html="content">
                    </div>
                    <placeholder v-else :paragraphs="2" />
                </div>
            </div>
            <div class="slide-button">
                <xButton />
            </div>
        </div>
            <template v-if="active">
            <button v-if="btnsShown.includes('prev')" class="btn btn-prev"  @click="$emit('onPrevSlide')">
                <span class="icon">
                    <icon name="arrowLeft" />
                </span>
            </button>
            <button v-if="btnsShown.includes('next')" class="btn btn-next"   @click="$emit('onNextSlide')">
                <span class="icon">
                    <icon name="arrowRight" />
                </span>
            </button>
        </template>
    </div>
</template>

<script>
import { user } from '../../admin/components/user'
import { xButton } from '../../admin/components/button'
import { indicator } from '../../admin/components/progress'
import { icon } from '../../icon'
import { placeholder } from '../placeholder'
import { spinner } from '../loader'

export default {
  name: 'StoryPostItem',
  data () {
    return {}
  },
  components: {
    user,
    xButton,
    indicator,
    icon,
    placeholder,
    spinner
  },
  props: {
    active: Boolean,
    loading: {
      type: Boolean
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev']
    },
    data: {
      type: Object,
      required: true,
      default: () => ({}),
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    avatarUrl: {
      type: String,
      required: true,
      default: 'https://i.pinimg.com/236x/55/67/c7/5567c77f407118991c19f34cdb36358a.jpg'
    },
    username: {
      type: String,
      required: true,
      default: 'Jhon'
    },
    content: {
      type: String
    },
    id: {
      type: Number
    }
  },
  emits: [
    'onPrevSlide',
    'onNextSlide',
    'onProgressFinish'
  ]
}
</script>

<style lang="scss" scoped src="./StoryPostItem.scss"></style>
