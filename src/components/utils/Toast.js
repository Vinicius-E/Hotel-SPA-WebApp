import "./Toast.css";
import { Subtitle2 } from "./StyledFonts";
import React from "react";

const Toast = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="toast-overlay">
      <div className="toast-container">
        <Subtitle2>{message}</Subtitle2>
        <div className="buttonWrapper">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
