import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemAction({ id, onDelete, onArchive, archived }) {
  console.log("Props di Action:", { onDelete, onArchive });

  return (
    <div className="detail-page__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
    </div>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool,
};

export default NoteItemAction;
