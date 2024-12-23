import React from 'react';
import "./LoadingSpinner.css";
import { Subtitle2 } from "./StyledFonts";

const LoadingSpinner = () => (
  <div className="toast">
    <div className="spinner"/>
    <Subtitle2>Loading...</Subtitle2>
  </div>
);

export default LoadingSpinner;
