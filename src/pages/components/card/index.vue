<script setup lang="ts">
const props = defineProps({
  height: Number,
  circle: Boolean,
});
</script>

<template>
  <view class="card-container">
    <view class="card-gradient" :style="{ height: `${props.height}px` }">
      <view v-if="props.circle" class="circle"></view>
      <slot />
    </view>
  </view>
</template>

<style lang="less">
@import '@assets/styles/variable.less';
.card-container {
  .card-gradient {
    position: relative;
    width: 100%;
    border-radius: 24px;
    border: 0 solid;
    z-index: 999;
    font-size: 32px;
    font-weight: 500;
    line-height: 68px;
    overflow: hidden;
  }
  .circle {
    position: absolute;
    width: inherit;
    height: inherit;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    animation: opacityAnimation 4s 1;
    opacity: 0.8;
  }
}
.orange {
  .card-container {
    .card-gradient {
      background-image: linear-gradient(
        289deg,
        @orange-primary-button-4 -30%,
        @orange-primary-button-3 12%,
        @orange-primary-button-2 80%,
        @orange-primary-button-1 130%
      );
      color: @orange-nav-text;

      .circle {
        background-image: url(@orange-background-circle);
      }
    }
  }
}
.blue {
  .card-container {
    .card-gradient {
      background-image: linear-gradient(
        289deg,
        @blue-primary-button-4 -30%,
        @blue-primary-button-3 12%,
        @blue-primary-button-2 80%,
        @blue-primary-button-1 130%
      );
      color: @blue-nav-text;

      .circle {
        background-image: url(@blue-background-circle);
      }
    }
  }
}
.red {
  .card-container {
    .card-gradient {
      background-image: linear-gradient(
        289deg,
        @red-primary-button-4 -30%,
        @red-primary-button-3 12%,
        @red-primary-button-2 80%,
        @red-primary-button-1 130%
      );
      color: @red-nav-text;

      .circle {
        background-image: url(@red-background-circle);
      }
    }
  }
}
</style>
