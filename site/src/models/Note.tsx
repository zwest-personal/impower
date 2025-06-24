import type {Campaign} from "./Campaign.tsx";

/**
 * Note is a singular note created by a canvasser and stored in the DB
 */
export type Note = {
    noteId: string,
    notes: string,
    fullName: string,
    email: string,
    campaignId: string,
    createdAt: Date,
    updatedAt: Date,
    campaign?: Campaign,
}