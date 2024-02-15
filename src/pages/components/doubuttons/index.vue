<script setup lang="ts">
</script>

<template>
  <view class="footer-fix">
    <view class="buttons">
      <slot />
    </view>
  </view>
</template>

<style lang="less">
.footer-fix {
  position: absolute;
  bottom: 0px;
  width: 100vw;
  height: 88px;
  .buttons {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    align-content: center;
    width: inherit;
    box-sizing: border-box;
  }
}
</style>
