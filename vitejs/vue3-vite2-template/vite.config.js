import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' // 引入vite-plugin-vue
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
// 自动引入
import Components from 'unplugin-vue-components/vite'
import resolves, { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 打印所有的resolves 查看适用ui库
console.log(resolves)
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/element-variable.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // 设置eslint
    eslintPlugin({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.js'], // 检查的文件
    }),

    ElementPlus({
      useSource: true,
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          // 自动引入修改主题色添加这一行，使用预处理样式
          importStyle: 'sass',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3040,
  },
})
