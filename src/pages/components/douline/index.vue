<script setup lang="ts"></script>

<template>
  <view class="line"></view>
</template>

<style lang="less">
@import '@assets/styles/variable.less';

.line {
  width: inherit;
  height: 2px;
  opacity: 0.5;
}
.orange {
  .line {
    background: linear-gradient(
      112.13deg,
      @orange-round-linear-main-4 0%,
      @orange-round-linear-main-1 30%,
      @orange-round-linear-main-3 80%,
      @orange-round-linear-main-2 100%
    );
  }
}
.blue {
  .line {
    background: linear-gradient(
      112.13deg,
      @blue-round-linear-main-4 0%,
      @blue-round-linear-main-1 30%,
      @blue-round-linear-main-3 80%,
      @blue-round-linear-main-2 100%
    );
  }
}
.red {
  .line {
    background: linear-gradient(
      112.13deg,
      @red-round-linear-main-4 0%,
      @red-round-linear-main-1 30%,
      @red-round-linear-main-3 80%,
      @red-round-linear-main-2 100%
    );
  }
}
</style>
