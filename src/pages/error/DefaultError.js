import React from "react";
import { Title2 } from "../../components/utils/StyledFonts";

const DefaultError = ({ error }) => {

  return (
    <div className="error-overlay">
      <div className="error-container">
        <Title2>{error.message}</Title2>
      </div>
    </div>
  );
};

export default DefaultError;