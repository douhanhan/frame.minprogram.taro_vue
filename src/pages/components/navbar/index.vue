<script setup lang="ts">
import { useGlobalStore } from '@stores/global';
import { onMounted, reactive } from 'vue';
import Taro from '@tarojs/taro';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'personal',
  },
});

const globalStore = useGlobalStore();
const heigths = reactive<object>(globalStore.getHeights);

const goBack = () => {
  const pages = Taro.getCurrentPages();
  if (pages && pages.length === 1) {
    Taro.reLaunch({
      url: '/pages/personal.center/index'
    });
  } else {
    Taro.navigateBack();
  }
};

onMounted(() => {});
</script>

<template>
  <view class="navbar-container" :style="{ height: heigths?.navbar }">
    <view class="row icon" :style="{ height: heigths?.navbar }">
      <view v-if="props.type === 'back'" class="iconfont doupipi-left" @tap="goBack"></view>
    </view>
    <view class="row text" :style="{ height: heigths?.navbar }">
      <slot />
    </view>
    <view class="row empty">&nbsp;</view>
  </view>
</template>

<style lang="less">
@import './index.less';
</style>
