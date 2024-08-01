<template>
    <div class="c-placeholder">
      <div class="placeholder-img"></div>
      <div class="placeholder_p"
           v-for="(item, ndx) in paragraphs"
           :key="ndx">
        <div class="line line_1"></div>
        <div class="line line_2"></div>
        <div class="line line_3"></div>
      </div>
    </div>
  </template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'placeholder',
  props: {
    paragraphs: {
      type: Number
    }
  }
}
</script>

  <style scoped lang="scss" src="./placeholder.scss">

</style>
