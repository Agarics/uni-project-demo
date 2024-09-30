<template>
  <view class="default-layout" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="min-h-full" :style="{ paddingBottom: '50px' }">
      <slot />
    </view>
    <wd-toast />
    <wd-message-box />
  </view>
</template>
<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>
<style lang="scss">
.default-layout {
  height: 100%;
  background: $uni-bg-color-grey;
}
</style>
