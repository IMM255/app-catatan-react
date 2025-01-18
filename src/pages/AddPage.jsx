import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  const onAddNoteHandler = (title, body ) => {
    addNote(title, body);
    navigate("/");
  };

  return (
    <section className="add-new-page">
      <NoteInput onSubmit={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
