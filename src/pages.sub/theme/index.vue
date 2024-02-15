<script setup lang="ts">
import { computed } from "vue";
import classNames from "classnames";
import { useGlobalStore } from "@stores/global";
import { page, navbar } from "@pages/components/index";
import bubbles from "./bubble.vue";
const globalStore = useGlobalStore();

const currColor = computed(() => globalStore.theme);

const changeColor = (color) => {
  globalStore.$patch({ theme: color });
};
</script>

<template>
  <page>
    <navbar type="back">切换主题</navbar>
    <view class="theme-container">
      <view class="column">
        <view
          :class="[
            'row',
            'blue',
            classNames({ active: currColor === '@blue' }),
          ]"
          @tap="changeColor('@blue')"
        >
          <view class="top">
            <bubbles></bubbles>
          </view>
          <view class="line"></view>
          <view class="bottom">
            <view
              v-if="currColor === '@blue'"
              class="iconfont doupipi-check"
            ></view>
            <view v-else class="iconfont doupipi-weixuanzhong"></view>
            <text class="text">蓝色主题</text>
          </view>
        </view>
        <view
          :class="[
            'row',
            'orange',
            classNames({ active: currColor === '@orange' }),
          ]"
          @tap="changeColor('@orange')"
        >
          <view class="top">
            <bubbles></bubbles>
          </view>
          <view class="line"></view>
          <view class="bottom">
            <view
              v-if="currColor === '@orange'"
              class="iconfont doupipi-check"
            ></view>
            <view v-else class="iconfont doupipi-weixuanzhong"></view>
            <text class="text">橙色主题</text>
          </view>
        </view>
        <view
          :class="['row', 'red', classNames({ active: currColor === '@red' })]"
          @tap="changeColor('@red')"
        >
          <view class="top">
            <bubbles></bubbles>
          </view>
          <view class="line"></view>
          <view class="bottom">
            <view
              v-if="currColor === '@red'"
              class="iconfont doupipi-check"
            ></view>
            <view v-else class="iconfont doupipi-weixuanzhong"></view>
            <text class="text">红色主题</text>
          </view>
        </view>
      </view>
    </view>
  </page>
</template>

<style lang="less">
@import "./index.less";
@import "@assets/styles/variable.less";

.active {
  .bubble18 {
    animation: bubble18Animation 4s infinite;
  }

  .bubble20 {
    animation: bubble20Animation 5s infinite;
  }

  .bubble22 {
    animation: bubble22Animation 5s infinite;
  }

  .bubble24 {
    animation: bubble24Animation 4s infinite;
  }

  .bubble28 {
    animation: bubble28Animation 5s infinite;
  }

  .bubble30 {
    animation: bubble30Animation 6s infinite;
  }
}
</style>
