import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteAppBody from "../components/NoteAppBody";
import { getArchivedNotes, searchNotes } from "../utils/local-data";
import NoteSearch from "../components/NoteSearch";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <section>
      <h2>Catatan Arsip</h2>
      <NoteSearch keywordChange={onKeywordChangeHandler} keyword={keyword} />
      <NoteAppBody
        keyword={keyword}
        notes={keyword != "" ? searchNotes(keyword, true) : getArchivedNotes()}
      />
    </section>
  );
}

export default HomePage;
