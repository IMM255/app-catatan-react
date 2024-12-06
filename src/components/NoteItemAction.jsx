import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemAction ({id, onDelete, onArchive, archived }) {
    console.log("Props di Action:", {onDelete, onArchive}); 

    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        </div>
    )
} 

export default NoteItemAction;