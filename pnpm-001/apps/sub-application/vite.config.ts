import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'

export default defineConfig({
  plugins: [react(), libInjectCss(), libAssetsPlugin(), dts()],
  build: {
    target: 'esnext',
    lib: {
      entry: ['src/App.tsx', 'src/components/Button/Button.tsx'],
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: ({ facadeModuleId }) => {
          const currentDirectory = path.basename(path.resolve('.'))
          const buildPath = facadeModuleId?.split(`${currentDirectory}/src/`)[1]
          if (buildPath) {
            return buildPath.replace('.tsx', '.js')
          } else {
            console.warn('failed to get build path', facadeModuleId, buildPath)
            return '[name].js'
          }
        }
      }
    }
  }
})
