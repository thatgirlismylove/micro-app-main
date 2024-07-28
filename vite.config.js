import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import postcss from './postcss.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true
  },
  css: {
    postcss: {}
  }
})
