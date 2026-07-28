import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages serves 404.html for unknown paths. Copying index.html to
// 404.html lets the SPA boot on deep links / refreshes (e.g. /research),
// where vue-router (HTML5 history mode) then takes over.
function spaFallback(): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle() {
      const dir = resolve(__dirname, 'dist')
      copyFileSync(resolve(dir, 'index.html'), resolve(dir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [vue(), spaFallback()],
})
