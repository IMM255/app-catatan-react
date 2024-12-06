import React from "react";

function NoteItemContent({title, body, createdAt}){
    return (
            <div class="note-item__content">
                <h3 class="note-item__title">{ title }</h3>
                    <p class="note-item__date">{ createdAt }</p>
                    <p class="note-item__body">{ body }</p>
            </div>
    )
}

export default NoteItemContent;