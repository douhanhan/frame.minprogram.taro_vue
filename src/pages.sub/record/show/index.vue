<script setup lang="ts">
import Taro from '@tarojs/taro';
import { page, navbar, doubuttons, doubutton } from '@pages/components/index';

const toAddData = () => {
  Taro.navigateTo({
    url: `/pages.sub/record/add/index`,
  });
};
</script>

<template>
  <page>
    <navbar type="back">显示记录</navbar>
    <view class="show-record-container">
      <view class="content-warp">
        <view class="row card">
          <view class="empty">
            <view class="top">
              <view class="images"></view>
            </view>
            <view class="bottom">
              <view class="text">暂无数据</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <doubuttons>
      <doubutton @tap="toAddData" text="去新增数据" type="main"></doubutton>
    </doubuttons>
  </page>
</template>

<style lang="less">
@import './index.less';
@import './theme.less';

.images {
  width: 600px;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url('@assets/images/empty.png');
}
</style>
