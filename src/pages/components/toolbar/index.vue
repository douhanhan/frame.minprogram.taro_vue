<script setup lang="ts">
import classNames from 'classnames';
import Taro from '@tarojs/taro';
import { useGlobalStore } from '@stores/global';

const globalStore = useGlobalStore();

const onChange = (index) => {
  // globalStore.$patch({ navIndex: index });
  if (index === 0) {
    Taro.navigateTo({
      url: `/pages.sub/record/show/index`,
    });
  }
  if (index === 1) {
    Taro.navigateTo({
      url: `/pages.sub/record/add/index`,
    });
  }
  if (index === 2) {
    globalStore.$patch({ navIndex: index });
    Taro.navigateTo({
      url: `/pages.sub/message/index`,
    });
  }
  if (index === 3) {
    globalStore.$patch({ navIndex: index });
    Taro.navigateTo({
      url: `/pages/personal.center/index`,
    });
  }
};
</script>

<template>
  <view class="toolbar-container">
    <view class="toolbar">
      
      <view class="rows">
        <view :class="['row', classNames({ active: globalStore?.navIndex === 0 })]" @tap="onChange(0)">
          <view class="cell iconfont doupipi-shouye"></view>
          <Text class="text">首页</Text>
          <view :class="['circle', classNames({ hide: globalStore?.navIndex != 0 })]"></view>
        </view>
        <view :class="['row', classNames({ active: globalStore?.navIndex === 1 })]" @tap="onChange(1)">
          <view class="cell iconfont doupipi-add"></view>
          <Text class="text">新增</Text>
          <view :class="['circle', classNames({ hide: globalStore?.navIndex != 1 })]"></view>
        </view>
        <view :class="['row', classNames({ active: globalStore?.navIndex === 2 })]" @tap="onChange(2)">
          <view class="cell iconfont doupipi-remind-btn-fill"></view>
          <Text class="text">消息</Text>
          <view :class="['circle', classNames({ hide: globalStore?.navIndex != 2 })]"></view>
        </view>
        <view :class="['row', classNames({ active: globalStore?.navIndex === 3 })]" @tap="onChange(3)">
          <view class="cell iconfont doupipi-danseshixintubiao-"></view>
          <Text class="text">我的</Text>
          <view :class="['circle', classNames({ hide: globalStore?.navIndex != 3 })]"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="less">
@import './index.less';
@import './theme.less';
</style>
