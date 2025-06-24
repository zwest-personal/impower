import {api} from "./api.tsx";
import type {Note} from "../models/Note.tsx";

export const NotesService = {
    /**
     * get a single note from the backend, by id
     */
    async get(id: string):Promise<Note> {
        const result = await api.get(`/notes/${id}`)
        return result.data
    },

    /**
     * list all notes available, with optional fulltext search
     *
     * TODO URL encode on both ends for query
     */
    async list(text?: string): Promise<Note[]> {
        let query = ''
        if (text) {
            query += `?text=${text}`
        }
        const result = await api.get(`/notes${query}`)
        console.log(result)
        return result.data.data.notes
    },

    /**
     * create a new note
     */
    async create(note: Note | any):Promise<Note>  {
        const result = await api.post(`/notes`, note)
        return result.data
    },

    /**
     * update an existing note
     */
    async update(id: string, note: Note):Promise<Note>  {
        const result = await api.patch(`/notes/${id}`, note)
        return result.data
    },

    /**
     * delete a note
     *
     * This does a hard delete at this time, but in the real world you'd want to consider a soft delete
     */
    async delete(id: string):Promise<boolean> {
        const result = await api.delete(`/notes/${id}`)
        return result.status === 204;

    }


}
