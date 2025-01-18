import React from "react";
import PropTypes from "prop-types";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, body, createdAt, id }) {
  return (
    <div className="note-item">
      <NoteItemContent
        id={id}
        title={title}
        body={body}
        createdAt={createdAt}
      />
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default NoteItem;
