import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '', // 상대경로로 설정
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        // JavaScript 파일은 js 폴더에 저장
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        
        // CSS 파일은 css 폴더에 저장
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name][extname]'
          }
          // 폰트 파일은 font 폴더에 저장
          if (assetInfo.name && /\.(woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
            return 'assets/font/[name][extname]'
          }
          // 그 외 파일은 기본 assets 폴더에 저장
          return 'assets/[name][extname]'
        },
      }
    }
  }
})
