import { memo } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

function Modal({ onClick, hidden }) {
  return ReactDOM.createPortal(
    <div onClick={onClick} className={`modal ${hidden && "hidden"}`} />,
    document.body
  );
}

export default memo(Modal);
