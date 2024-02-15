<script setup lang="ts">
import { page, navbar, doubutton, doubuttons } from '@pages/components/index';
import { inject, reactive } from 'vue';
const request = inject('request');

interface RecordForm {
  _id: string;
  title: string;
  desc: string;
  files: string[];
  fileName: string;
  freqOptions: string[];
  freq: number;
}

const data = reactive<RecordForm>({
  _id: '',
  title: '今天有台风，豆皮皮脾气不稳定',
  desc: '今天有台风，豆皮皮脾气不稳定。今天有台风，豆皮皮脾气不稳定。',
  files: [],
  fileName: '',
  freqOptions: ['未完成', '已完成'],
  freq: 0,
});

// 保存记录信息
const saveRecord = async () => {
  const db = await request?.database();
  db.collection(request?.globalData?.collection)
    .add({
      data: {
        title: data.title, // 待办标题
        desc: data.desc, // 待办描述
        files: data.files, // 待办附件列表
        freq: Number(data.freq), // 待办完成情况（提醒频率）
        star: false,
      },
    })
    .then(() => {});
};
</script>

<template>
  <page>
    <navbar type="back">添加记录</navbar>
    <view class="add-record-container">
      <view class="column">
        <view class="content">
          <view class="row card">
            <view class="lattice">
              <view class="top">
                <text class="text">记录标题</text>
              </view>
              <view class="bottom">
                <input class="input" type="text" placeholder="请输入记录标题（20字以内）" placeholderClass="desc" />
              </view>
            </view>
            <view class="line"></view>
            <view class="lattice">
              <view class="top">
                <text class="text">详细描述</text>
              </view>
              <view class="bottom">
                <input class="input" type="text" placeholder="请输入详细描述（100字以内）" placeholderClass="desc" />
              </view>
            </view>
          </view>
          <view class="row card">
            <view class="cell">
              <view class="left">
                <text class="text">添加附件</text>
              </view>
              <view class="right">
                <text class="desc">点击添加附件</text>
                <view class="iconfont doupipi-right"></view>
              </view>
            </view>
          </view>
          <view class="row card">
            <view class="cell">
              <view class="left">
                <text class="text">列表选择</text>
              </view>
              <view class="right">
                <text class="desc">默认</text>
                <view class="iconfont doupipi-right"></view>
              </view>
            </view>
            <view class="line"></view>
            <view class="cell">
              <view class="left">
                <text class="text">状态</text>
              </view>
              <view class="right">
                <text class="desc">未完成</text>
                <view class="iconfont doupipi-right"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <doubuttons>
      <doubutton text="清空" type="sub"></doubutton>
      <doubutton @tap="saveRecord" text="保存" type="main"></doubutton>
    </doubuttons>
  </page>
</template>

<style lang="less">
@import './index.less';
@import './theme.less';
</style>
