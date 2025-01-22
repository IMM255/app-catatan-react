import React, { useEffect, useState } from "react";
import NoteAppBody from "../components/NoteAppBody";
import { getActiveNotes } from "../utils/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoteSearch from "../components/NoteSearch";
import { FaPlus } from "react-icons/fa";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { InfinitySpin } from "react-loader-spinner";

function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [loader, setLoader] = useState(true);
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getActiveNotes();
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

  const detail = () => {
    navigate("/add");
  };

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <>
          <section className="homepage">
            <h2>{locale == "id" ? "Catatan Aktif" : "Active Notes"}</h2>
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
          <div className="homepage__action">
            <button
              className="action"
              type="button"
              title={locale == "id" ? "Tambah" : "Add"}
              onClick={detail}
            >
              <FaPlus />
            </button>
          </div>
        </>
      )}
    </LocaleConsumer>
  );
}

export default HomePage;
