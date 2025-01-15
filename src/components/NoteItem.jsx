import React from "react";
import PropTypes from "prop-types";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  console.log("Props di List:", { onDelete, onArchive });

  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};
export default NoteItem;
