<script setup lang="ts">
import { page, navbar, doubutton, doubuttons } from '@pages/components/index';
</script>

<template>
  <page>
    <navbar type="back">修改信息</navbar>
    <view class="edit-container">
      <view class="column">
        <view class="row header">
          <view class="cell active">
            <view class="iconfont doupipi-chongwutubiao23"></view>
            <text class="text">男猫</text>
          </view>
          <view class="cell">
            <view class="iconfont doupipi-chongwutubiao21"></view>
            <text class="text">女猫</text>
          </view>
        </view>
        <view class="row content">
          <view class="card">
            <!-- 表单元素组 -->
            <view class="form-item">
              <view class="item-left">昵称</view>
              <view class="item-right">
                <input type="text" placeholder="请输入昵称" placeholderClass="placeholder" />
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">体重(KG)</view>
              <view class="item-right">
                <input type="text" placeholder="请输入体重" placeholderClass="placeholder" />
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">生日</view>
              <view class="item-right">
                <picker mode="date">
                  <view className="picker">请选择日期</view>
                </picker>
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">性别</view>
              <view class="item-right">
                <view class="radios"></view>
                <radio class="radio" value="男" checked>男</radio>
                <radio class="radio" value="女" style="margin-left: 18px">女</radio>
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">品种</view>
              <view class="item-right">
                <input type="text" placeholder="请输入品种" placeholderClass="placeholder" />
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">性格</view>
              <view class="item-right">
                <input type="text" placeholder="请输入性格" placeholderClass="placeholder" />
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">上次驱虫时间</view>
              <view class="item-right">
                <picker mode="date">
                  <view className="picker">请选择日期</view>
                </picker>
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">上次疫苗时间</view>
              <view class="item-right">
                <picker mode="date">
                  <view className="picker">请选择日期</view>
                </picker>
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">是否绝育</view>
              <view class="item-right">
                <switch checked />
              </view>
            </view>
            <view class="form-item">
              <view class="item-left">生活城市</view>
              <view class="item-right">
                <picker mode="region">
                  <View class="picker">请选择城市</View>
                </picker>
              </view>
            </view>
          </view>
        </view>
        <!-- <view class="footer">
          <view class="buttons">
            <view class="subbutton">取消</view>
            <view class="button">保存</view>
          </view>
        </view> -->
      </view>
    </view>
    <doubuttons>
      <doubutton text="取消" type="sub"></doubutton>
      <doubutton text="保存" type="main"></doubutton>
    </doubuttons>
  </page>
</template>

<style lang="less">
@import './index.less';
@import './theme.less';
</style>
