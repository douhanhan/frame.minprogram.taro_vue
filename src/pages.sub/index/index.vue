<script setup lang="ts">
// import Taro from "@tarojs/taro";
import { ref } from 'vue';
import { indexInfo } from "@data/personal.js";
import { page, navbar, doubuttons, doubutton } from '@pages/components/index';
import { useGlobalStore } from '@stores/global';
const globalStore = useGlobalStore();

let currColor = ref(globalStore.theme);

// const topCenter = () => {
//   Taro.navigateTo({
//     url: `/pages/personal.center/index`,
//   });
// };
</script>

<template>
  <page>
    <navbar type="back">头像和简介</navbar>
    <view class="index-container">
      <view class="column">
        <view class="top">
          <view class="bubble"></view>
          <view class="round">
            <view class="images"></view>
            <view class="avatar"></view>
          </view>
        </view>
        <view class="middle">
          <view class="card">
            <view class="form-item">
              <view class="item-top">昵称</view>
              <view class="item-bottom">
                <input
                  type="text"
                  placeholder="请输入昵称"
                  placeholderClass="placeholder"
                  :value="`${indexInfo[currColor]?.title}`"
                />
              </view>
            </view>
          </view>
          <view class="card">
            <view class="form-item">
              <view class="item-top">简介</view>
              <view class="item-bottom">
                <textarea
                  class="textarea"
                  placeholder="请输入简介信息"
                  placeholderClass="placeholder"
                  autoFocus
                  :value="`${indexInfo[currColor]?.subTitle}`"
                ></textarea>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <doubuttons>
      <doubutton :text="`${indexInfo[currColor].buttonText}`" type="main"></doubutton>
    </doubuttons>
  </page>
</template>

<style lang="less">
@import "./index.less";
@import "./theme.less";
</style>
