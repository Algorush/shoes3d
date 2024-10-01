import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from 'path';
import { VitePluginFonts } from 'vite-plugin-fonts'
import {browserslistToTargets} from 'lightningcss';
import browserslist from 'browserslist';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(),cssInjectedByJsPlugin()],
  assetsInclude: /\.(woff2|woff|ttf)$/i,
  server: {  
    port: 3001, // Replace with your desired port number,
  },
  resolve: {
    alias: {
      // Create aliases for custom imports
      'three/addons': path.resolve(__dirname, 'node_modules/three/examples/jsm'),
      'my_hooks': path.resolve(__dirname, 'src/components/Hooks'),
      'orientation-check': path.resolve(__dirname, 'src/components/Hooks/checkOrientation.js'),
      '@/': `${path.resolve(__dirname, 'src/components')}/`
    },
  },
  optimizeDeps: {
    include: ['three-stdlib'],
  },
  define: {
    'process.env.VITE_BASENAME': JSON.stringify(process.env.VITE_BASENAME || '/'),
  },
  css: {
    modules: { // Enabling CSS Modules support
      localsConvention: 'camelCaseOnly', // optional: makes the generated class names camelCase
    },
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    cssMinify: 'lightningcss'
  }
})
