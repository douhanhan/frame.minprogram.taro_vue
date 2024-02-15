<script setup lang="ts">
import classNames from 'classnames';
import { useGlobalStore } from '@stores/global';
import { computed, reactive } from 'vue';
const globalStore = useGlobalStore();
const theme = computed(() => globalStore.theme);
const heigths = reactive<object>(globalStore.getHeights);
</script>

<template>
  <view
    :class="[
      'page-container',
      classNames({
        orange: theme === '@orange',
        blue: theme === '@blue',
        red: theme === '@red',
      }),
    ]"
    :style="{ height: heigths?.container, paddingTop: heigths?.navbar }"
  >
  <slot></slot>
  </view>
</template>

<style lang="less">
@import './index.less';
</style>
