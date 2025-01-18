import React from "react";
import PropTypes from "prop-types";
import { MdDone } from "react-icons/md";
import { useState } from "react";

function NoteInput({ onSubmit }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [titleCharLimit, setTitleCharLimit] = useState(50);

  const onTitleChangeEventHandler = (event) => {
    const maxLimit = titleCharLimit;
    const inputValue = event.target.value;
    if (inputValue.length <= maxLimit) {
      setTitle(inputValue);
    }
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  return (
    <div className="add-new--page__input">
      <div className="add-new-page__input">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit({ title, body });
          }}
        >
          <p className="note-input__title__char-limit">
            Sisa karakter: {titleCharLimit - title.length}
          </p>
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required=""
            value={title}
            onChange={onTitleChangeEventHandler}
          />
          <textarea
            className="add-new-page__input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            required=""
            value={body}
            onChange={onBodyChangeEventHandler}
          ></textarea>
          <div className="add-new-page__action">
            <button type="submit" className="action">
              <MdDone />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

NoteInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default NoteInput;
