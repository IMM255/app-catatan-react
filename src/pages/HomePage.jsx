import React from "react";
import NoteAppBody from "../components/NoteAppBody";
import { getActiveNotes, searchNotes } from "../utils/local-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoteSearch from "../components/NoteSearch";
import { FaPlus } from "react-icons/fa";

function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
  };

  const detail = () => {
    navigate("/add");
  };

  return (
    <>
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <NoteSearch keywordChange={onKeywordChangeHandler} keyword={keyword} />
        <NoteAppBody
          keyword={keyword}
          notes={keyword != "" ? searchNotes(keyword) : getActiveNotes()}
        />
      </section>
      <div className="homepage__action">
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={detail}
        >
          <FaPlus />
        </button>
      </div>
    </>
  );
}

export default HomePage;
