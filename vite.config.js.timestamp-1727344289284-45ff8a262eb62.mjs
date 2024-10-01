// vite.config.js
import { defineConfig } from "file:///Users/alehbaronin/Desktop/valentino_bags/node_modules/vite/dist/node/index.js";
import react from "file:///Users/alehbaronin/Desktop/valentino_bags/node_modules/@vitejs/plugin-react/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///Users/alehbaronin/Desktop/valentino_bags/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import path from "path";
import { VitePluginFonts } from "file:///Users/alehbaronin/Desktop/valentino_bags/node_modules/vite-plugin-fonts/dist/index.js";
import { browserslistToTargets } from "file:///Users/alehbaronin/Desktop/valentino_bags/node_modules/lightningcss/node/index.mjs";
import browserslist from "file:///Users/alehbaronin/Desktop/valentino_bags/node_modules/browserslist/index.js";
var __vite_injected_original_dirname = "/Users/alehbaronin/Desktop/valentino_bags";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [react(), cssInjectedByJsPlugin()],
  assetsInclude: /\.(woff2|woff|ttf)$/i,
  server: {
    port: 3001
    // Replace with your desired port number,
  },
  resolve: {
    alias: {
      // Create aliases for custom imports
      "three/addons": path.resolve(__vite_injected_original_dirname, "node_modules/three/examples/jsm"),
      "my_hooks": path.resolve(__vite_injected_original_dirname, "src/components/Hooks"),
      "orientation-check": path.resolve(__vite_injected_original_dirname, "src/components/Hooks/checkOrientation.js"),
      "@/": `${path.resolve(__vite_injected_original_dirname, "src/components")}/`
    }
  },
  optimizeDeps: {
    include: ["three-stdlib"]
  },
  define: {
    "process.env.VITE_BASENAME": JSON.stringify(process.env.VITE_BASENAME || "/")
  },
  css: {
    modules: {
      // Enabling CSS Modules support
      localsConvention: "camelCaseOnly"
      // optional: makes the generated class names camelCase
    },
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(">= 0.25%"))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: void 0
      }
    },
    cssMinify: "lightningcss"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWxlaGJhcm9uaW4vRGVza3RvcC92YWxlbnRpbm9fYmFnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FsZWhiYXJvbmluL0Rlc2t0b3AvdmFsZW50aW5vX2JhZ3Mvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FsZWhiYXJvbmluL0Rlc2t0b3AvdmFsZW50aW5vX2JhZ3Mvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFZpdGVQbHVnaW5Gb250cyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWZvbnRzJ1xuaW1wb3J0IHticm93c2Vyc2xpc3RUb1RhcmdldHN9IGZyb20gJ2xpZ2h0bmluZ2Nzcyc7XG5pbXBvcnQgYnJvd3NlcnNsaXN0IGZyb20gJ2Jyb3dzZXJzbGlzdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnLi8nLFxuICBwbHVnaW5zOiBbcmVhY3QoKSxjc3NJbmplY3RlZEJ5SnNQbHVnaW4oKV0sXG4gIGFzc2V0c0luY2x1ZGU6IC9cXC4od29mZjJ8d29mZnx0dGYpJC9pLFxuICBzZXJ2ZXI6IHsgIFxuICAgIHBvcnQ6IDMwMDEsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgcG9ydCBudW1iZXIsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgLy8gQ3JlYXRlIGFsaWFzZXMgZm9yIGN1c3RvbSBpbXBvcnRzXG4gICAgICAndGhyZWUvYWRkb25zJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20nKSxcbiAgICAgICdteV9ob29rcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9Ib29rcycpLFxuICAgICAgJ29yaWVudGF0aW9uLWNoZWNrJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL0hvb2tzL2NoZWNrT3JpZW50YXRpb24uanMnKSxcbiAgICAgICdALyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cycpfS9gXG4gICAgfSxcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWyd0aHJlZS1zdGRsaWInXSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52LlZJVEVfQkFTRU5BTUUnOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5WSVRFX0JBU0VOQU1FIHx8ICcvJyksXG4gIH0sXG4gIGNzczoge1xuICAgIG1vZHVsZXM6IHsgLy8gRW5hYmxpbmcgQ1NTIE1vZHVsZXMgc3VwcG9ydFxuICAgICAgbG9jYWxzQ29udmVudGlvbjogJ2NhbWVsQ2FzZU9ubHknLCAvLyBvcHRpb25hbDogbWFrZXMgdGhlIGdlbmVyYXRlZCBjbGFzcyBuYW1lcyBjYW1lbENhc2VcbiAgICB9LFxuICAgIHRyYW5zZm9ybWVyOiAnbGlnaHRuaW5nY3NzJyxcbiAgICBsaWdodG5pbmdjc3M6IHtcbiAgICAgIHRhcmdldHM6IGJyb3dzZXJzbGlzdFRvVGFyZ2V0cyhicm93c2Vyc2xpc3QoJz49IDAuMjUlJykpXG4gICAgfVxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3NNaW5pZnk6ICdsaWdodG5pbmdjc3MnXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsb0JBQW9CO0FBQzFVLE9BQU8sV0FBVztBQUNsQixPQUFPLDJCQUEyQjtBQUNsQyxPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUSw2QkFBNEI7QUFDcEMsT0FBTyxrQkFBa0I7QUFOekIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLE1BQU0sR0FBRSxzQkFBc0IsQ0FBQztBQUFBLEVBQ3pDLGVBQWU7QUFBQSxFQUNmLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQTtBQUFBLE1BRUwsZ0JBQWdCLEtBQUssUUFBUSxrQ0FBVyxpQ0FBaUM7QUFBQSxNQUN6RSxZQUFZLEtBQUssUUFBUSxrQ0FBVyxzQkFBc0I7QUFBQSxNQUMxRCxxQkFBcUIsS0FBSyxRQUFRLGtDQUFXLDBDQUEwQztBQUFBLE1BQ3ZGLE1BQU0sR0FBRyxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCLENBQUM7QUFBQSxJQUNwRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUEsRUFDMUI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLDZCQUE2QixLQUFLLFVBQVUsUUFBUSxJQUFJLGlCQUFpQixHQUFHO0FBQUEsRUFDOUU7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQTtBQUFBLE1BQ1Asa0JBQWtCO0FBQUE7QUFBQSxJQUNwQjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsY0FBYztBQUFBLE1BQ1osU0FBUyxzQkFBc0IsYUFBYSxVQUFVLENBQUM7QUFBQSxJQUN6RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxFQUNiO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
