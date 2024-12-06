import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({title, body, createdAt, id, onDelete}){
    return (
        <div class="note-item">
            <NoteItemContent title={title} body={body} createdAt={createdAt} />
            <NoteItemAction id={id} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem;