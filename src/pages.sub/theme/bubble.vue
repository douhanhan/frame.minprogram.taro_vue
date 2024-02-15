<script setup lang="ts"></script>

<template>
  <view class="bubbles">
    <view class="bubble30"></view>
    <view class="bubble28"></view>
    <view class="bubble28" style="scale: 1.5; top: 40p; left: 100px"></view>
    <view class="bubble18" style="scale: 0.5; top: 60px; left: 80px"></view>
    <view class="bubble18"></view>
    <view class="bubble20" style="scale: 0.5; top: 170px; left: 10px"></view>
    <view class="bubble20"></view>
    <view class="bubble22"></view>
    <view class="bubble28" style="scale: 0.6; top: 30px; left: 40px"></view>
    <view class="bubble22" style="scale: 0.5; top: 90px; left: 80px"></view>
    <view class="bubble24"></view>
    <view class="bubble18" style="scale: 0.5; top: 100p; left: 10px"></view>
    <view class="bubble18" style="scale: 0.5; top: 170px; left: 30px"></view>
    <view class="bubble18" style="scale: 0.5; top: 300px; left: 80px"></view>
  </view>
</template>

<style lang="less">
.bubbles {
  width: inherit;
  height: inherit;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  opacity: 0.6;

  .bubble18 {
    width: 36px;
    height: 36px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
    position: absolute;
    top: 220px;
    left: 80px;
  }

  .bubble20 {
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
    position: absolute;
    top: 20px;
    left: 40px;
  }

  .bubble22 {
    width: 44px;
    height: 44px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
    position: absolute;
    top: 120px;
    left: 200px;
  }

  .bubble24 {
    width: 48px;
    height: 48px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
    position: absolute;
    top: 160px;
    left: 100px;
  }

  .bubble28 {
    width: 56px;
    height: 56px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
    position: absolute;
    top: 360px;
    left: 30px;
  }

  .bubble30 {
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
    position: absolute;
    top: 300px;
    left: 240px;
  }
}
</style>
