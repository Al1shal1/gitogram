<template>
    <div class="c-stories-slider">
        <div class="stories-container">
            <ul class="stories__list" ref="slider">
        <li class="stories__item"
          v-for="({id, owner, readme}, ndx) in trendings"
          :key="id"
          ref="item"
        >
          <StoryPostItem
            :avatarUrl="owner?.avatar_url"
            :username="owner?.login"
            :content="readme"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :btnsShown="activeBtns"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
          />
         </li>
        </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { StoryPostItem } from '../StoryPostItem'

export default {
  name: 'TheStoriesSlider',
  components: { StoryPostItem },
  props: {
    initialSlide: { tyoe: Number }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed:
  {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    }
  },
  moveSlider (slideNdx) {
    const { slider, item } = this.$refs
    const sliderWith = parseInt(
      getComputedStyle(item[this.slideNdx]).getPropertyValue('width'), 10
    )
    this.slideNdx = slideNdx
    this.sliderPosition = -(sliderWith * slideNdx)

    slider.style.transform = `translateX(${this.sliderPosition}px)`
  },
  async loadReadme () {
    this.loading = true
    this.btnsShown = false
    try {
      await this.fetchReadmeForActiveSlide()
    } catch (error) {
      console.log(error)
      throw error
    } finally {
      this.loading = false
      this.btnsShown = true
    }
  },
  async handleSlide (slideNdx) {
    this.moveSlide(slideNdx)
    await this.loadReadme()
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(
        (item) => item.id === this.initialSlide
      )
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings()
  }
}
</script>

<style lang="scss" scoped src="./storiesSlider.scss">
</style>
