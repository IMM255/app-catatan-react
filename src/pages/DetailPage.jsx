import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote, archiveNote, deleteNote, unarchiveNote } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { InfinitySpin } from "react-loader-spinner";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(getNote(id));
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);
    navigate("/");
  }

  async function onArchiveHandler(id) {
    await archiveNote(id);
    navigate("/");
  }

  async function onUnArchiveHandler(id) {
    await unarchiveNote(id);
    navigate("/");
  }
  if (!note) {
    return (
      <LocaleConsumer>
        {({ locale }) => (
          <div>{locale == "id" ? "Tidak ditemukan" : "Not found"}</div>
        )}
      </LocaleConsumer>
    );
  }
  return (
    <>
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
        <NoteDetail
          onDelete={() => onDeleteNoteHandler(id)}
          onArchive={() =>
            note.archived ? onUnArchiveHandler(id) : onArchiveHandler(id)
          }
          {...note}
        />
      )}
    </>
  );
}

export default DetailPage;
