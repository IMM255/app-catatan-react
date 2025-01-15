import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(event) {
        this.setState({ searchQuery: event.target.value });
    }
    render() {
    return (
        <>
            <NoteAppHeader 
                searchQuery={ this.state.searchQuery }
                onSearch={ this.onSearchHandler }
            />
            <NoteAppBody searchQuery={ this.state.searchQuery } />
        </>
    )
}
}

export default NoteApp;