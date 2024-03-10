import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    // minify: false,
    target: 'esnext',
    lib: {
      entry: ['src/App.tsx', 'src/components/Button/Button.tsx'],
      // name: 'sub-application',
      formats: ['es']
      // fileName: (format, path) => {
      //   return path
      // }
    },
    rollupOptions: {
      external: ['react', 'react-dom'],

      // "exports": {
      //   ".": "./dist/App.js",
      //   "./components/Button": "./dist/components/Button.js"
      // },
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
