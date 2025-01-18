import React from "react";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

function NoteDetail({
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  id,
  archived,
}) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </section>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteDetail;
