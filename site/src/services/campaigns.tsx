import {api} from "./api.tsx";
import type {Campaign} from "../models/Campaign.tsx";

export const CampaignsService = {
    /**
     * get a single campaign from the backend, by id
     */
    async get(id: string): Promise<Campaign> {
        const result = await api.get(`/campaigns/${id}`)
        return result.data
    },

    /**
     * list all notes available, with optional fulltext search
     */
    async list(): Promise<Campaign[]> {
        const result = await api.get(`/campaigns`)
        return result.data.data.campaigns
    },

    /**
     * create a new note
     */
    async create(campaign: Campaign): Promise<Campaign> {
        const result = await api.post(`/campaigns`, campaign)
        return result.data
    },
}
