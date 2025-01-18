import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from "../utils/local-data";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(getNote(id));

  const onDeleteNoteHandler = (id) => {
    deleteNote(id);
    navigate("/");
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    navigate("/");
  };

  const onUnArchiveHandler = (id) => {
    unarchiveNote(id);
    navigate("/");
  };
  if (!note) {
    return <div>Not found</div>;
  }
  return (
    <>
      <NoteDetail
        onDelete={() => onDeleteNoteHandler(id)}
        onArchive={() =>
          note.archived ? onUnArchiveHandler(id) : onArchiveHandler(id)
        }
        {...note}
      />
    </>
  );
}

export default DetailPage;
