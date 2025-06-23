import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// Listening on 0.0.0.0/all is bad if this was directly exposed to the interwebs, but it's not - it's going through
// docker so Vite's insistence on protecting the code is frustrating
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8080,
        host: "0.0.0.0",
        allowedHosts: true,
        watch: {
            usePolling: true,
        }
    },
    envDir: 'config'
})
