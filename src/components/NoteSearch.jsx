import React from "react";
import PropTypes from "prop-types";

function NoteSearch({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section className="search-bar">
          <input
            type="text"
            placeholder={
              locale == "id" ? "Cari catatan ..." : "Search for notes"
            }
            value={keyword}
            onChange={(e) => keywordChange(e.target.value)}
          />
        </section>
      )}
    </LocaleConsumer>
  );
}

NoteSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
export default NoteSearch;
