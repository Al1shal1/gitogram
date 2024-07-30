<template>
    <div class="wrapper">
        <progress />
        <div class="avatar-container">
             <avatar
             :avatarUrl="'https://i.pinimg.com/236x/55/67/c7/5567c77f407118991c19f34cdb36358a.jpg'"
             :nickname="John"
             />
        </div>
        <div class="content-wrapper">
            <slot />
        </div>
        <xButton />
    </div>
</template>

<script>
import { progress } from '../progress'
import { avatar } from '../avatar'
import { button } from '../button'
export default {
  name: 'SliderItem',
  components: {
    progress,
    avatar,
    button
  }
}

</script>
