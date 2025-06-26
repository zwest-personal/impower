import axios, {AxiosError} from "axios"

export const api = axios.create({
    withCredentials: true,
    baseURL: import.meta.env?.VITE_API_PATH || '/api' // Slightly hacky tweak for testing
})

/**
 * Handle JSend errors
 * @param error
 */
const errorHandler = (error: unknown) => {
    if (error instanceof AxiosError) {
        const statusCode = error?.response?.status

        // logging only errors that are not 401
        if (statusCode && statusCode !== 401) {
            console.error(error)
        }

        return Promise.reject(error)
    } else {
        return Promise.reject(error)
    }
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})