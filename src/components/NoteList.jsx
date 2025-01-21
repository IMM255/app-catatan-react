import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NoteList({ notes }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        if (notes.length === 0) {
          return (
            <p className="notes-list__empty-message">
              {locale == "id" ? "Tidak ada catatan" : "No notes found"}
            </p>
          );
        }

        return (
          <section className="notes-list">
            {notes.map((note) => (
              <NoteItem
                className="note-item"
                key={note.id}
                id={note.id}
                {...note}
              />
            ))}
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
