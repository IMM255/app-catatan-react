import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteAppBody from "../components/NoteAppBody";
import { getArchivedNotes, searchNotes } from "../utils/local-data";
import NoteSearch from "../components/NoteSearch";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section>
          <h2>{locale == "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
          <NoteSearch
            keywordChange={onKeywordChangeHandler}
            keyword={keyword}
          />
          <NoteAppBody
            keyword={keyword}
            notes={
              keyword != "" ? searchNotes(keyword, true) : getArchivedNotes()
            }
          />
        </section>
      )}
    </LocaleConsumer>
  );
}

export default HomePage;
