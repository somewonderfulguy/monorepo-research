import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // copyPublicDir: false,
    lib: {
      entry: 'src/App.tsx',
      name: 'shared',
      fileName: 'index'
    }
  }
})
