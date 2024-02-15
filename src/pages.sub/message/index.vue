<script setup lang="ts">
import { ref } from 'vue';
import classNames from 'classnames';
// import { useGlobalStore } from '@stores/global';
import empty from './empty.vue';
// const globalStore = useGlobalStore();
import { page, navbar, toolbar, douline, avatar, card } from '@pages/components/index';
const currTabIndex = ref<number>(1);

const changeTab = (index) => {
  currTabIndex.value = index;
};
</script>

<template>
  <page>
    <view class="message-container">
      <navbar>
        <view class="tabs">
          <view 
            @tap="changeTab(0)" 
            :class="['tab', classNames({ active: currTabIndex === 0 })]">
              通讯录
          </view>
          <view 
            @tap="changeTab(1)" 
            :class="['tab', classNames({ active: currTabIndex === 1 })]">
            消息
          </view>
        </view>
      </navbar>
      <view v-if="currTabIndex === 1" class="content-warp">
        <view class="message">
          <empty></empty>
        </view>
      </view>
      <view v-else-if="currTabIndex === 0" class="content-warp">
        <view class="row">
          <card :height="44" :circle="false">
            <view class="search"> <view class="iconfont doupipi-sousuo"></view>搜索 </view>
          </card>
        </view>
        <view class="row card">
          <view class="column">
            <view class="cell">
              <view class="left">
                <avatar :size="44" />
                <view class="text">豆皮皮</view>
              </view>
              <view class="right">
                <view class="iconfont doupipi-right"></view>
              </view>
            </view>
            <!-- <douline />
            <view class="cell">
              <view class="left">
                <avatar :size="44" />
                <view class="text">豆皮皮</view>
              </view>
              <view class="right">
                <view class="iconfont doupipi-right"></view>
              </view>
            </view> -->
          </view>
        </view>
      </view>
    </view>
    <toolbar></toolbar>
  </page>
</template>

<style lang="less">
@import './index.less';
@import './theme.less';
</style>
