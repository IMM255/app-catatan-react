import React from "react";
import { addNote } from "../utils/api";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(title, body) {
    try {
      addNote(title, body);
      navigate("/");
    } catch (error) {
      console.error("Failed to add note: ".error);
      alert("Failed to add note. Please try again.");
    }
  }

  return (
    <section className="add-new-page">
      <NoteInput onSubmit={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
