import React from "react";
import PropTypes from "prop-types";

function NoteSearch({ searchQuery, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        value={searchQuery}
        onChange={onSearch}
      />
    </div>
  );
}

NoteSearch.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default NoteSearch;
