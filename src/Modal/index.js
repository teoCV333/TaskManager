import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { ModalIcon } from "../ModalIcon";
import { TodoContext } from "../TodoContext";

function Modal({children}) {

    const { setOpenModal } = React.useContext(TodoContext);

    return ReactDOM.createPortal(
      <div className="modal-bg">
        <ModalIcon onClick={() => setOpenModal(state => !state)} />
        {children}
      </div>,
      document.getElementById('modal')
    )
}

export { Modal };