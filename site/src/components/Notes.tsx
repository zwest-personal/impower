import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type {Note} from '../models/Note';
import {NotesService} from '../services/notes';
import ErrorPopup from "./widgets/ErrorPopup.tsx";
import {Box, Button, Modal, Typography} from "@mui/material";
import NoteModal from "./widgets/NoteModal.tsx";

function Notes() {
    const [note, setNote] = useState<Note | null>(null);
    const [noteList, setNoteList] = useState<Note[]>([]);
    const [notesError, setNotesError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const fetchNotes = async () => {
        try {
            const results = await NotesService.list()
            setNoteList(results)

        } catch (e) {
            console.error(e);
            setNotesError(e.message);
        }
    }
    useEffect(() => {
        fetchNotes();
    }, [])


    /**
     * Delete a single note, then refresh list
     *
     * A refinement on this later would be to just remove the one note from the list without reloading the full list
     * Plus to add a confirmation dialog
     *
     * @param id
     */
    async function deleteNote(id: string) {
        try {
            await NotesService.delete(id)
            await fetchNotes()
        } catch (e) {
            console.error(e);
            setNotesError((e as Error).message);
        }
    }

    return (
        <>
            <NoteModal showModal={showModal} setShowModal={setShowModal} refresh={fetchNotes} note={note}/>
            <Button variant="outlined" color="success" size="large" onClick={() => {
                setNote(null)
                setShowModal(true)
            }}>Create Note</Button>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Note</TableCell>
                            <TableCell align="right">Campaign</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {noteList.map(n => (
                            <TableRow key={n.noteId}>
                                <TableCell component="th" scope="row">
                                    {n.email}
                                </TableCell>
                                <TableCell align="right">{n.notes}</TableCell>
                                <TableCell align="right">{n.campaignId}</TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" color="warning" size="large"
                                            onClick={() => {
                                                setNote(n)
                                                setShowModal(true)
                                            }}>Edit</Button>
                                    <Button variant="outlined" color="error" size="large"
                                            onClick={() => deleteNote(n.noteId)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </Paper>
            <ErrorPopup error={notesError} setError={setNotesError}/>
        </>
    );
}

export default Notes;