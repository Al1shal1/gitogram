<template>
    <div class="c-spinner" :class="color"></div>
  </template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'spinner',
  props: {
    color: {
      type: String
    }
  }
}
</script>

  <style scoped lang="scss">
    .c-spinner {
        width: 39.86px;
        height: 39.86px;
        border: 3px solid #31AE54;
        border-bottom-color: transparent;
        border-radius: 50%;
       animation: load 1s infinite linear;
       &.white{
        border: 3px solid #fff;
        border-bottom-color: transparent;
       }
    }

    @keyframes load{
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
  </style>
