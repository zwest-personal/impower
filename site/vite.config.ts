import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// Listening on 0.0.0.0/all is bad if this was directly exposed to the interwebs, but it's not - it's going through
// docker so Vite's insistence on protecting the code is frustrating
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
    }),
  ],
  server: {
    port: 8080,
    host: "0.0.0.0",
    allowedHosts: true,
    watch: {
      usePolling: true,
    }
  },
  build: {
    manifest: true,
    rollupOptions: {
      external: [
        "/__mocks__"
      ],
    },
  },
  resolve: {
    alias: {
      "@src": "/src",
      "@public": "/public"
    }
  },
  envDir: 'config'
})
