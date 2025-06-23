/**
 * Note is a singular note created by a canvasser and stored in the DB
 */
export type Note = {
    noteId: string,
    notes: string,
    email: string,
    campaignId: string,
    campaignName?: string,
    createdAt: Date,
    updatedAt: Date,
}