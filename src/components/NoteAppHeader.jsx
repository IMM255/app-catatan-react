import React from "react";
import PropTypes from "prop-types";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ searchQuery, onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch searchQuery={searchQuery} onSearch={onSearch} />
    </div>
  );
}

NoteAppHeader.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default NoteAppHeader;
