import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteAppBody from "../components/NoteAppBody";
import { getArchivedNotes } from "../utils/api";
import NoteSearch from "../components/NoteSearch";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

function ArchivedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");
  const [notes, setNotes] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onKeywordChangeHandler = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
    setKeyword(newKeyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section>
          <h2>{locale == "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
          <NoteSearch
            keywordChange={onKeywordChangeHandler}
            keyword={keyword}
          />
          {loader ? (
            <div className="loader">
              <InfinitySpin
                visible={true}
                width="200"
                color="#3FC1C9"
                ariaLabel="infinity-spin-loading"
              />
            </div>
          ) : (
            <NoteAppBody keyword={keyword} notes={filteredNotes} />
          )}
        </section>
      )}
    </LocaleConsumer>
  );
}

export default ArchivedPage;
