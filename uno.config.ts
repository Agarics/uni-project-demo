// uno.config.ts
import {
  type Preset,
  type SourceCodeTransformer,
  presetUno,
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

// @see https://unocss.dev/presets/legacy-compat
import presetLegacyCompat from '@unocss/preset-legacy-compat'

const isMp = process.env?.UNI_PLATFORM?.startsWith('mp') ?? false

const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []
if (isMp) {
  // 使用小程序预设
  presets.push(presetApplet(), presetRemRpx())
  transformers.push(transformerApplet())
} else {
  presets.push(
    // 非小程序用官方预设
    presetUno(),
    // 支持css class属性化
    presetAttributify(),
  )
}
export default defineConfig({
  presets: [
    ...presets,
    // 支持图标，需要搭配图标库，eg: @iconify-json/carbon, 使用 `<button class="i-carbon-sun dark:i-carbon-moon" />`
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    // 将颜色函数 (rgb()和hsl()) 从空格分隔转换为逗号分隔，更好的兼容性app端，example：
    // `rgb(255 0 0)` -> `rgb(255, 0, 0)`
    // `rgba(255 0 0 / 0.5)` -> `rgba(255, 0, 0, 0.5)`
    presetLegacyCompat({
      commaStyleColorFunction: true,
    }) as Preset,
  ],
  /**
   * 自定义快捷语句
   * @see https://github.com/unocss/unocss#shortcuts
   */
  shortcuts: [['center', 'flex justify-center items-center']],
  theme: {
    colors: {
      primary: '#f39c12',
      success: '#2ecc71',
      info: '#3498db',
      warning: '#f1c40f',
      error: '#e74c3c',
      base: '#333',
      deep: '#222',
      grey: '#666',
      greyyer: '#999',
    },
  },
  transformers: [
    ...transformers,
    // 启用 @apply 功能
    transformerDirectives(),
    // 启用 () 分组功能
    // 支持css class组合，eg: `<div class="hover:(bg-gray-400 font-medium) font-(light mono)">测试 unocss</div>`
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify({
      // 解决与第三方框架样式冲突问题
      prefixedOnly: true,
      prefix: 'fg',
    }),
  ],
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
})

/**
 * 最终这一套组合下来会得到：
 * mp 里面：mt-4 => margin-top: 32rpx
 * h5 里面：mt-4 => margin-top: 1rem
 */
