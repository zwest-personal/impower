import {api} from "./api.tsx";
import type {Note} from "../models/Note.tsx";

export const NotesService = {
    /**
     * get a single note from the backend, by id
     */
    async get(id: string) {
        const result = await api.get(`/notes/${id}`)
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

    /**
     * update an existing note
     */
    async update(id: string, note: Note) {
    },

    /**
     * delete a note
     *
     * This does a hard delete at this time, but in the real world you'd want to consider a soft delete
     */
    async delete(id: string) {
    }


}
