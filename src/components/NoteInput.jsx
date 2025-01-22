import React from "react";
import PropTypes from "prop-types";
import { MdDone } from "react-icons/md";
import { useState } from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";
import useInput from "./UseInput";

function NoteInput({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [body, onBodyChangeEventHandler] = useInput("");
  const [titleCharLimit, setTitleCharLimit] = useState(50);

  const onTitleChangeEventHandler = (event) => {
    const maxLimit = titleCharLimit;
    const inputValue = event.target.value;
    if (inputValue.length <= maxLimit) {
      setTitle(inputValue);
    }
  };

  return (
    <LocaleConsumer>
      {({ locale }) => {
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
                  {locale == "id" ? "Sisa karakter" : "remaining characters"}
                  {titleCharLimit - title.length}
                </p>
                <input
                  className="add-new-page__input__title"
                  type="text"
                  placeholder={
                    locale == "id" ? "Ini adalah judul ..." : "Enter title ..."
                  }
                  required
                  value={title}
                  onChange={onTitleChangeEventHandler}
                />
                <textarea
                  className="add-new-page__input__body"
                  type="text"
                  placeholder={
                    locale == "id"
                      ? "Tuliskan catatanmu di sini ..."
                      : "Enter note ..."
                  }
                  required
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
      }}
    </LocaleConsumer>
  );
}

NoteInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default NoteInput;
