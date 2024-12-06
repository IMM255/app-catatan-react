import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";

function NoteApp(){
    const notes = getInitialData();
    return (
        <div className="note-app">
            <NoteList notes={notes} />
        </div>
    )
}

export default NoteApp;