<script setup lang="ts">
import { doubutton } from '@pages/components/index';
</script>

<template>
  <view class="row card">
    <view class="empty">
      <view class="top">
        <view class="images"></view>
      </view>
      <view class="bottom" style="margin-bottom: 32px;">
        <view class="text">暂无聊天数据</view>
        <doubutton text="去看看" type="main"></doubutton>
      </view>
    </view>
  </view>
</template>

<style lang="less">
@import './index.less';
@import './theme.less';
</style>
