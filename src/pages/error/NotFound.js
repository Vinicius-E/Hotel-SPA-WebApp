// src/components/errorPage/ErrorPage.js
import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";
import { Title2 } from "../../components/utils/StyledFonts";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate("/");
  };

  return (
    <div className="error-overlay">
      <div className="error-container">
        <Title2>Error 404 - Page not Found!</Title2>
        <div className="buttonWrapper">
          <button onClick={handleReload}>Reload</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;