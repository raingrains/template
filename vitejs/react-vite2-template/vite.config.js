import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint' // 引入vite-plugin-vue
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import styleImport from 'vite-plugin-style-import' // 按需加载组件样式文件
// import theme from './src/assets/theme.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 设置eslint
    eslintPlugin({
      include: ['src/**/*.jsx', 'src/**/*.js'], // 检查的文件
    }),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => {
            // 组件样式按需加载，无需全局引入
            return `antd/es/${name}/style/index`
          },
        },
      ],
    }),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      eslintrc: {
        enabled: true, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true,
      },
    }),
  ],
  server: {
    port: 8081,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 主题色修改
        modifyVars: {
          '@primary-color': '#1890ff',
          '@link-color': '#1890ff',
          '@success-color': '#52c41a',
          '@warning-color': ' #faad14',
          '@error-color': '#f5222d',
          '@font-size-base': '14px',
          '@heading-color': 'rgba(0, 0, 0, 0.85)',
          '@text-color': 'rgba(0, 0, 0, 0.65)',
          '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
          '@disabled-color': 'rgba(0, 0, 0, 0.25)',
          '@border-radius-base': '2px',
          '@border-color-base': '#d9d9d9',
          '@box-shadow-base':
            '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
        },
        javascriptEnabled: true,
      },
    },
  },
})
