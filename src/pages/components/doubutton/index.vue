<script setup lang="ts">
import classNames from 'classnames';
const props = defineProps({
  text: String,
  type: String,
  tap: Function,
});
</script>

<template>
  <view
    @tap="props.tap"
    :class="
      classNames({
        button: props.type === 'main',
        subbutton: props.type === 'sub',
      })
    "
  >
    {{ props.text }}
  </view>
</template>

<style lang="less">
@import './index.less';
@import './theme.less';
</style>
