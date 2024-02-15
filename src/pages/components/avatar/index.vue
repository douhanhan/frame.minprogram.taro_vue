<script setup lang="ts">
const props = defineProps({
  size: Number,
});
const style = {
  width: `${props.size}px`,
  height: `${props.size}px`,
  flexBasis: `${props.size}px`,
  borderRadius: `${props.size}px`,
};
</script>

<template>
  <view class="avatar-container">
    <view class="avatar" :style="style"></view>
  </view>
</template>

<style lang="less">
@import '@assets/styles/variable.less';
.avatar {
  top: 0;
  left: 0;
  opacity: 1;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  &:active {
    opacity: 0.8;
  }
}
.orange {
  .avatar {
    background-image: url(@orange-avatar-main);
  }
}
.blue {
  .avatar {
    background-image: url(@blue-avatar-main);
  }
}
.red {
  .avatar {
    background-image: url(@red-avatar-main);
  }
}
</style>
