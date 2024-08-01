<template>
    <div :class={active} class="c-progress">
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'indicator',
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      if (this.active === true) {
        this.$emit('onFinish')
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.active = true
    })
    this.$refs.indicator.addEventListener('transition', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener(
      'transitioned',
      this.emitOnFinish
    )
  }
}
</script>

<style lang="scss" scoped src="./progress.scss"></style>
