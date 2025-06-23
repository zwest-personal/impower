import {api} from "./api.tsx";

export const DebugService = {
    /**
     *  It pings!
     */
    async ping() {
        const result = await api.get("/debug/ping")
        return result.data
    },

    /**
     * Fetch session details of 'this' user.
     */
    async session() {
        const result = await api.get("/debug/session")
        return result.data
    }
}