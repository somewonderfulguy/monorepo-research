import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    // minify: false,
    target: 'esnext',
    lib: {
      entry: 'src/App.tsx',
      name: 'sub-application',
      formats: ['es']
      // fileName: (format) => `App.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: '[name].js'
        // assetFileNames: '[name][extname]'
        // globals
      }
    }
  }
})
