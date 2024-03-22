import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'
import { Plugin as PluginRollup } from 'rollup'

// for future: vite build --config vite.lib.config.js

const entriesData: Record<string, { code: string; css?: string }> = {
  Button: {
    code: 'src/components/Button/Button.tsx',
    css: 'components/Button/Button.css'
  },
  App: {
    code: 'src/App.tsx',
    css: 'App.css'
  },
  reset: {
    code: 'src/styles/reset.css',
    css: 'styles/reset.css'
  },
  log: {
    code: 'src/utils/log.ts'
  }
}

const vitePlugin = (): Plugin => {
  return {
    name: 'my-plugin',
    apply: 'build',
    configResolved(config) {
      // console.log('configResolved', config)
    }
  }
}

const rollupPlugin = (): PluginRollup => ({
  name: 'my-rollup-plugin',
  buildStart(data) {
    // console.log(data, 'buildStart')
  },
  writeBundle(normalizedOutputOptions, outputBundle) {
    // console.log('outputBundle', normalizedOutputOptions)
  }
})

const entry = Object.values(entriesData).map(({ code }) => code)

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    libAssetsPlugin({
      name: '[name].[ext]',
      outputPath(url, _resourcePath) {
        const currentDirectorySrc = path.basename(path.resolve('.')) + '/src/'
        const resourcePath = _resourcePath.replace(/\\/g, '/')
        const splitPath = resourcePath.split(currentDirectorySrc)

        if (splitPath.length > 1) {
          const removeLastSegment = (path: string) =>
            path.replace(/\/[^/]*$/, '')

          return removeLastSegment(splitPath[1])
        }
        return 'assets'
      }
    }),
    vitePlugin(),
    dts()
  ],
  build: {
    target: 'esnext',
    lib: {
      entry,
      formats: ['es']
    },
    copyPublicDir: false,
    rollupOptions: {
      plugins: [rollupPlugin()],
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: ({ facadeModuleId }) => {
          const currentDirectory = path.basename(path.resolve('.'))
          const buildPath = facadeModuleId?.split(`${currentDirectory}/src/`)[1]
          if (buildPath) {
            return buildPath.replace('.tsx', '.js').replace('.ts', '.js')
          } else {
            console.warn('failed to get build path', facadeModuleId, buildPath)
            return '[name].js'
          }
        },
        assetFileNames: (chunkInfo) => {
          const name = chunkInfo.name
          if (name?.endsWith('.css')) {
            const baseName = name.replace(
              '.css',
              ''
            ) as keyof typeof entriesData
            const entryData = entriesData[baseName]

            if (entryData?.css) {
              return entryData.css
            }
            console.warn('failed to get css file data', chunkInfo.name)
          }
          return '[name][extname]'
        },
        chunkFileNames(chunkInfo) {
          const name = chunkInfo.name as keyof typeof entriesData
          const entryData = entriesData[name]
          if (entryData) {
            return `${entryData.code
              .replace('src/', '')
              .replace(`${name}.tsx`, '')
              .replace(`${name}.ts`, '')}[name].[hash].js`
          }
          console.warn('failed to get chunk file data', chunkInfo.name)
          return '[name].[hash].js'
        }
      }
    }
  }
})
