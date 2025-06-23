import {api} from "./api.tsx";
import type {User} from "../models/User.tsx";

export const UsersService = {

    /**
     * Create a new user
     *
     * For this basic app we're allowing for a sort of self-registration, where just email/pw/name are needed to
     * create a canvasser account
     *
     * @param user
     */
    async create(user: User) {
        const result = await api.post(`/users`, user)
        return result.data
    },

    /**
     * Request a login with the backend
     *
     * Backend will set a session cookie and UI will allow access at that point.
     *
     * @param email
     * @param password
     */
    async login(email: string, password: string) {
        const result = await api.post(`/users/login`, {
            email,
            password
        })
        return result.data
    },

    /**
     * Trigger logout on the backend
     *
     * Basically just deletes the session and whips the user back to the signon screen, nothing fancy.
     */
    async logout() {
        const result = await api.get(`/users/logout`)
        return result.data
    },

    /**
     * Status queries the backend for info about 'this' user
     */
    async status() {
        const result = await api.get(`/users`)
        return result.data
    }
}
