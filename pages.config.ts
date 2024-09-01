import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'uni-prooject-demo',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
    h5: {
      navigationStyle: 'custom',
    },
  },
  easycom: {
    autoscan: true,
    custom: {
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#222',
    selectedColor: '#f39c12',
    backgroundColor: '#fff',
    borderStyle: 'white',
    height: '50px',
    fontSize: '12px',
    iconWidth: '22px',
    spacing: '2px',
    list: [
      {
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/home-select.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/category.png',
        selectedIconPath: 'static/tabbar/category-select.png',
        pagePath: 'pages/category/index',
        text: '分类',
      },
      {
        iconPath: 'static/tabbar/interaction.png',
        selectedIconPath: 'static/tabbar/interaction-select.png',
        pagePath: 'pages/interaction/index',
        text: '互动',
      },
      {
        iconPath: 'static/tabbar/shop-cart.png',
        selectedIconPath: 'static/tabbar/shop-cart-select.png',
        pagePath: 'pages/shop-card/index',
        text: '购物车',
      },
      {
        iconPath: 'static/tabbar/person.png',
        selectedIconPath: 'static/tabbar/person-select.png',
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },
})
