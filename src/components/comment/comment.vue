<template>
    <div class="c-comment">
        <p>
            <span class="username"><b>{{ username }}</b></span>
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
  name: ' TheComment ',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
