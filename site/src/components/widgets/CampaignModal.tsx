import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import ErrorPopup from "./ErrorPopup.tsx";
import {CampaignsService} from "../../services/campaigns.tsx";
import type { Campaign } from '../../models/Campaign.tsx';

// Mostly pulled right from the Material docs with minimal changes
export default function CampaignModal({showModal, setShowModal, refresh}: { showModal: boolean, setShowModal: Function, refresh: Function}) {
    const [campaignsError, setCampaignsError] = useState("");
    const [dataState, setDataState ] = useState({});

    const handleClose = () => {
        setShowModal(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setDataState({ ...dataState, [name]: value });
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
                                await CampaignsService.create(dataState as Campaign)
                                refresh()
                                handleClose();
                            } catch(e) {
                                setCampaignsError((e as Error).message)
                            }
                            handleClose();
                        },
                    },
                }}
            >
                <DialogTitle>Create New Campaign</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
            <ErrorPopup error={campaignsError} setError={setCampaignsError} />
        </>
    );
}