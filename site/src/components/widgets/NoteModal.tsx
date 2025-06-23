import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";
import ErrorPopup from "./ErrorPopup.tsx";
import {CampaignsService} from "../../services/campaigns.tsx";
import type {Campaign} from "../../models/Campaign.tsx";
import {FormControl, InputLabel, MenuItem, Select, TextareaAutosize} from "@mui/material";
import {NotesService} from "../../services/notes.tsx";
import type {Note} from "../../models/Note.tsx";

// Mostly pulled right from the Material docs with minimal changes
export default function NoteModal({showModal, setShowModal, refresh, note}: { showModal: boolean, setShowModal: Function, refresh: Function, note : Note | null}) {
    const [notesError, setNotesError] = useState("");
    const [campaignsList, setCampaignsList] = useState<Campaign[]>([]);
    const [dataState, setDataState ] = useState({});

    const handleClose = () => {
        setShowModal(false);
    };

    // TODO This shouldn't really be done here like this - loading the list each time - but for the very short list we'll have in the demo code it's fine
    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const results = await CampaignsService.list()
                setCampaignsList(results)
            } catch (e) {
                console.error(e);
                setNotesError((e as Error).message);
            }
        }
        fetchCampaigns();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataState({ ...dataState, [name]: value });
    }

    if (note === null) {
        note = {} as Note
    }

    return (
        <>
            <Dialog
                open={showModal}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            try {
                                if (!note.noteId) {
                                    await NotesService.create(dataState)
                                } else {
                                    await NotesService.update(note.noteId, dataState as Note)
                                }
                                refresh()
                                handleClose();
                            } catch(e) {
                                setNotesError((e as Error).message)
                            }

                        },
                    },
                }}
                style={{flex: 1}}
            >
                <DialogTitle>{note.noteId ? "Update Note" : "Create New Note"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        defaultValue={note.email}
                        onChange={handleChange}
                    />

                    <FormControl sx={{marginTop: 2, width: '100%'}}>
                        <TextareaAutosize
                            required
                            id="name"
                            name="notes"
                            placeholder="Note Body"
                            minRows={5}
                            onChange={handleChange}
                            defaultValue={note.notes}
                        />
                    </FormControl>
                    <FormControl sx={{marginTop: 2, minWidth: 360}}>
                        <InputLabel id="create-note-campaign-list">Campaign</InputLabel>
                        <Select
                            margin="dense"
                            labelId="create-note-campaign-list"
                            id="create-note-campaign-list"
                            name="campaignId"
                            defaultValue={note.campaignId}
                            label="Campaign"
                            fullWidth
                            onChange={handleChange}
                        >
                            <MenuItem value="">No Campaign</MenuItem>
                            {campaignsList.map((campaign) => (
                                <MenuItem value={campaign.campaignId}>{campaign.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">{note.noteId ? "Save" : "Create"}</Button>
                </DialogActions>
            </Dialog>
            <ErrorPopup error={notesError} setError={setNotesError}/>
        </>
    );
}