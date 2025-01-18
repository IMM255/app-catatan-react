import React from "react";
import PropTypes from "prop-types";
import NoteList from "./NoteList";

function NoteAppBody({ notes }) {
  return (
    <div className="note-app__body">
      <NoteList notes={notes} />
    </div>
  );
}

NoteAppBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteAppBody;
