<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <component :is="name" />
</template>

<script>
import * as icon from './variants'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'icon',
  components: { ...icon },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icon).includes(value)
      }
    }
  }
}
</script>
