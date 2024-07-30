<template>
    <div class="slider-wrapper">
        <indicator />
          <div class="avatar-container">
               <avatar
               :avatarUrl="'https://i.pinimg.com/236x/55/67/c7/5567c77f407118991c19f34cdb36358a.jpg'"
               :nickname="'Jhon'"
               />
          </div>
          <div class="slider-container">
          <div class="content-wrapper">
              <slot />
          </div>
          <div class="slider-button"><xButton/></div>
      </div>
        </div>
</template>

<script>
import { indicator } from '../progress'
import { avatar } from '../avatar'
import { xButton } from '../button'
export default {
  name: 'SliderItem',
  components: {
    indicator,
    avatar,
    xButton
  }
}

</script>

<style lang="scss" scoped>
.slider-wrapper {
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.avatar-container {
  margin: 12px 0;
  display: flex;
  align-items: center;
}
.slider-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-wrapper {
  border-top: 1px solid #CACACA ;
  border-bottom: 1px solid #CACACA ;
  display: flex;
  justify-content: center;
  flex-direction:column;
  width: 330px;
  padding-top: 24px;
}
.slider-button{
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
</style>
