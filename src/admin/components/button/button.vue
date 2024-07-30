<template>
    <button
    class="c-button">{{ text || "Follow" }}
    </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'xButton',
  props: {
    text: String
  }
}

</script>

<style lang="scss" scoped src="./button.scss"></style>
