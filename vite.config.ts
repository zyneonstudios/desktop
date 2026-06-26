import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/src-tauri/**']
        }
    },
  base: './',
})
