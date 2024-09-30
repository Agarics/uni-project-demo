<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view>
    <!-- swiper -->
    <view>
      <wd-swiper
        class="card-swiper"
        custom-indicator-class="custom-indicator"
        :list="swiperList"
        :height="560"
        :indicator="{ type: 'dots-bar' }"
        autoplay
        v-model:current="current"
        @click="handleClick"
        @change="onChange"
      ></wd-swiper>
    </view>

    <!-- 福利入口 -->
    <view class="flex bg-white py-2 mx-4 -mt-4 relative z-10">
      <view class="flex flex-col items-center flex-1">
        <view
          class="rounded-full bg-gradient-to-b from-primary/[0.2] size-8 flex items-center justify-center m-1"
        >
          <view class="i-carbon-currency text-black"></view>
        </view>
        <text class="text-sm">新人专享</text>
        <text class="text-xs text-gray-500">领取￥65新人劵包</text>
      </view>
      <view class="flex flex-col items-center flex-1">
        <view
          class="rounded-full bg-gradient-to-b from-primary/[0.2] size-8 flex items-center justify-center mb-1"
        >
          <view class="i-carbon-gift text-black"></view>
        </view>
        <text class="text-sm">社群福利</text>
        <text class="text-xs text-gray-500">100%中奖</text>
      </view>
    </view>

    <!-- 咨询列表 -->
    <view class="mt-4 py-4 bg-white space-y-4">
      <view v-for="index in 2" :key="index" class="px-4">
        <view class="text-base font-medium mb-2">经营分析</view>
        <view class="border border-solid border-gray-100 rounded-sm bg-white overflow-hidden">
          <image :src="swiperList[0]" mode="scaleToFill" class="w-full block" />
          <view class="p-4">
            <view class="text-sm font-medium mb-1">蛋仔派对 | 失心熊立减30元</view>
            <view class="text-xs text-gray-500">还有更多好物等你查看</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const current = ref<number>(0)

const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
function handleClick(e) {
  console.log(e)
}
function onChange(e) {
  console.log(e)
}
</script>
<style lang="scss" scoped>
.card-swiper {
  --wot-swiper-radius: 0;
  --wot-swiper-nav-dot-color: #fff;
  --wot-swiper-nav-dot-active-color: #f39c12;

  :deep(.custom-indicator) {
    bottom: 1.75rem;
    border-radius: 0rpx;
  }
}
</style>
