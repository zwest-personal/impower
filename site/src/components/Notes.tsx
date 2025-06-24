import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type {Note} from '../models/Note';
import {NotesService} from '../services/notes';
import ErrorPopup from "./widgets/ErrorPopup.tsx";
import {Button, CircularProgress} from "@mui/material";
import NoteModal from "./widgets/NoteModal.tsx";
import {CSVLink} from "react-csv";
import TextField from "@mui/material/TextField";


const csvHeaders = [
  {
    label: "Name",
    key: "fullName",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Notes",
    key: "notes",
  },
  {
    label: "Campaign",
    key: "campaign.name",
  },
];

function Notes() {
  const [note, setNote] = useState<Note | null>(null);
  const [noteList, setNoteList] = useState<Note[]>([]);
  const [notesError, setNotesError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("")
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNotes = async () => {
    try {
      setLoading(true)
      const results = await NotesService.list(filter)
      setNoteList(results)
    } catch (e) {
      console.error(e);
      setNotesError(e.message);
    }
    setLoading(false)

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

  /**
   * handleFilter watches the text filter and queries on debounce
   */
  async function handleFilter(e) {
    const { value } = e.target;
    setFilter(value)
  }

  React.useEffect(() => {
    const updateNotes = setTimeout(async () => {
      await fetchNotes()
    }, 1000)
    return () => clearTimeout(updateNotes)
  }, [filter])

  return (
    <>

      <NoteModal showModal={showModal} setShowModal={setShowModal} refresh={fetchNotes} note={note}/>
      <div style={{flexDirection: 'row', gap:"5ch", display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
        <TextField
          style={{width: "50ch"}}
          margin="dense"
          id="filter"
          name="filter"
          label="Search Notes (min 4 characters)"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleFilter}
        />
        <div>
        <CSVLink
          data={noteList}
          headers={csvHeaders}
          filename={"impower-notes.csv"}
          target="_blank"
        >
          <Button style={{ width: "25ch"}} variant="outlined" color="cancel" size="large" >
            Export Notes
          </Button>
        </CSVLink>
        <Button style={{width: "25ch"}} variant="outlined" color="success" size="large" onClick={() => {
          setNote(null)
          setShowModal(true)
        }}>Create Note</Button>
        </div>
      </div>
      <Paper>
        { loading ? <CircularProgress color="secondary" /> : null }
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
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
                  {n.fullName}
                </TableCell>
                <TableCell align="right">{n.email}</TableCell>
                <TableCell align="right">{n.notes}</TableCell>
                <TableCell align="right">{n.campaign?.name}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" color="warning" size="small"
                          onClick={() => {
                            setNote(n)
                            setShowModal(true)
                          }}>Edit</Button>
                  <Button variant="outlined" color="error" size="small"
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