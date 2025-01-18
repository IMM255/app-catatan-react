import React from "react";
import PropTypes from "prop-types";
import { FaTrashCan } from "react-icons/fa6";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="action" onClick={() => onDelete(id)}>
      <FaTrashCan />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
