import React from "react";
import PropTypes from "prop-types";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";

function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button className="action" onClick={() => onArchive(id)}>
      {archived ? <MdOutlineUnarchive /> : <MdOutlineArchive />}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
