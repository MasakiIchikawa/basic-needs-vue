import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers:[BootstrapVueNextResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port:8080,
/*    proxy: {
      "/api": {
        target: "https://light.peace-tea.jp",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/rt"),
      },
    },*/
  },
  preview:{
    port:8080
  }
})
