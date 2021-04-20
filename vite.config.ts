import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      _c: resolve(__dirname, 'src/components')
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 8080, // 端口号
    open: true, // 启动服务时是否自动打开游览器
    cors: true, // 允许跨域
    https: false // 是否开启 https

    // 设置代理
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
