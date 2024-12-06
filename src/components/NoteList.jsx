import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }){
    console.log("Props di List:", {onDelete, onArchive}); 
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    archived={note.archived}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    {...note} />
                ))
            }
        </div>
    )
}

export default NoteList;