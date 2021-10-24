import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";
import IconButton from "../IconButton/IconButton";
import { ImCross } from "react-icons/im";

const Modal = ({ children, onModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onModal]);

  const handBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handBackDropClick}>
      <div className={s.Modal}>
        {children}
        <IconButton onClick={onModal} aria-label="close modal">
          <ImCross width="40" height="40" className={s.ImCross} />
        </IconButton>
      </div>
    </div>,
    document.getElementById("modalRoot")
  );
};

Modal.propTypes = {
  onModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
