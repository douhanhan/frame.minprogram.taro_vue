<script setup lang="ts">
import Taro from '@tarojs/taro';
import { ref } from 'vue';
import { avatarInfo } from '@data/personal.js';
import { useGlobalStore } from '@stores/global';
import { page, navbar, toolbar, card } from '@pages/components/index';
const globalStore = useGlobalStore();
let currColor = ref(globalStore.theme.split('@')[1]);

const changeTheme = () => {
  Taro.navigateTo({
    url: `/pages.sub/theme/index`,
  });
};

const toEditInfo = () => {
  Taro.navigateTo({
    url: `/pages.sub/edit/index`,
  });
};

const toIndexInfo = () => {
  Taro.navigateTo({
    url: `/pages.sub/index/index`,
  });
};
</script>

<template>
  <page>
    <navbar>个人中心</navbar>
    <view class="personal-center-container">
      <toolbar></toolbar>
      <view class="column">
        <view class="header">
          <view class="images">
            <view class="nimeng iconfont doupipi-tubiaozhizuomoban-"></view>
            <view class="qishui iconfont doupipi-guozhiqishui"></view>
            <view class="maozhua iconfont doupipi-maozhao"></view>
            <view class="avatar" @tap="toIndexInfo"></view>
          </view>
          <view class="info">
            <view class="info-top">
              <view class="info-name">{{ avatarInfo['@blue']?.name }}</view>
              <view class="info-edit" @tap="toEditInfo">点击编辑</view>
            </view>
            <view class="info-bottom">{{ avatarInfo['@blue']?.introduce }}</view>
          </view>
        </view>
        <view class="center">
          <card :height="120" :circle="true">
            <view class="statistics">
              <view class="title">我的统计</view>
              <view class="results">
                <view class="result">
                  <view class="number">{{ avatarInfo['@blue']?.statistics.recorded }}</view>
                  <view class="text">已记录</view>
                </view>
                <view class="result">
                  <view class="number">{{ avatarInfo['@blue']?.statistics.underway }}</view>
                  <view class="text">进行中</view>
                </view>
                <view class="result">
                  <view class="number">{{ avatarInfo['@blue']?.statistics.completed }}</view>
                  <view class="text">已完成</view>
                </view>
              </view>
            </view>
          </card>
        </view>
        <view class="footer">
          <view class="list">
            <view class="item" style="margin-top: 4px" @tap="toEditInfo">
              <view class="left">
                <view class="iconfont doupipi-shezhi1"></view>
                <text class="text">设置信息</text>
              </view>
              <view class="right"><view class="iconfont doupipi-right"></view></view>
            </view>
            <view class="item">
              <view class="left">
                <view class="iconfont doupipi-jushoucanggift"></view>
                <text class="text">我的收藏</text>
              </view>
            </view>
            <view class="item">
              <view class="left">
                <view class="iconfont doupipi-sousuo"></view>
                <text class="text">去搜索</text>
              </view>
            </view>
            <view class="line"></view>
            <view class="item" @tap="changeTheme">
              <view class="left">
                <view class="iconfont doupipi-theme"></view>
                <text class="text">修改主题</text>
              </view>
              <view class="right">
                <text class="text">{{ currColor }}</text>
                <view class="iconfont doupipi-right"></view>
              </view>
            </view>
            <view class="item">
              <view class="left">
                <view class="iconfont doupipi-xiaoxi"></view>
                <text class="text">我的消息</text>
              </view>
            </view>
            <view class="item">
              <view class="left">
                <view class="iconfont doupipi-bangzhu"></view>
                <text class="text">查看帮助</text>
              </view>
            </view>
            <view class="item" style="margin-bottom: 4px">
              <view class="left">
                <view class="iconfont doupipi-menu_app_bbgl"></view>
                <text class="text">当前版本</text>
              </view>
              <view class="right">
                <text class="text" style="margin-right: 32px">v0.1.3</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </page>
</template>

<style lang="less">
@import './index.less';
@import './theme.less';
</style>
