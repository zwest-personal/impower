import {api} from "./api.tsx";
import type {Campaign} from "../models/Campaign.tsx";

export const CampaignsService = {
    /**
     * get a single campaign from the backend, by id
     */
    async get(id: string) {
        const result = await api.get(`/campaigns/${id}`)
        console.log(result.data)
        return result.data
    },

    /**
     * list all notes available, with optional fulltext search
     */
    async list(text?: string) {
    },

    /**
     * create a new note
     */
    async create(note: Note) {
    },
}
