import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

class NoteAppBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
      
    }
    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id){
        const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note);
        this.setState({ notes });
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false
                    }
                ]
            }
        })
    }

    render(){
        const activeNotes = this.state.notes.filter((note) => {
            return note.archived === false;
        });
        
        const archivedNotes = this.state.notes.filter((note) => {
            return note.archived === true;
        });
    return (
        <div className="note-app__body">
            <NoteInput addNote={this.onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NoteList 
                notes={activeNotes} 
                onDelete={this.onDeleteHandler} 
                onArchive={this.onArchiveHandler}
                />
            <h2>Arsip</h2>
            <NoteList 
                notes={archivedNotes}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
            />
        </div>
    )
    }

}

export default NoteAppBody;