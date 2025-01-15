import React, { useState } from "react";
import { getInitialData } from "../utils";
import PropTypes from "prop-types";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function NoteAppBody({ searchQuery }) {
    // Use state for notes
    const [notes, setNotes] = useState(getInitialData());

    // Handler functions
    const onDeleteHandler = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const onArchiveHandler = (id) => {
        setNotes(notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note));
    };

    const onAddNoteHandler = ({ title, body }) => {
        setNotes(prevNotes => [
            ...prevNotes,
            {
                id: +new Date(),
                title,
                body,
                createdAt: new Date().toISOString(),
                archived: false
            }
        ]);
    };

    // Filter notes based on the search query
    const activeNotes = notes.filter(note => !note.archived);
    const archivedNotes = notes.filter(note => note.archived);

    const filteredActiveNotes = activeNotes.filter(note => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredArchiveNotes = archivedNotes.filter(note => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="note-app__body">
            <NoteInput addNote={onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NoteList 
                notes={filteredActiveNotes} 
                onDelete={onDeleteHandler} 
                onArchive={onArchiveHandler}
            />
            <h2>Arsip</h2>
            <NoteList 
                notes={filteredArchiveNotes}
                onDelete={onDeleteHandler}
                onArchive={onArchiveHandler}
            />
        </div>
    );
}

NoteAppBody.propTypes = {
    searchQuery: PropTypes.string.isRequired,
}

export default NoteAppBody;
