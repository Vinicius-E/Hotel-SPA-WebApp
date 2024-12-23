import "./Rating.css";
import React from "react";

const Rating = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = [...Array(maxRating)];

  return (
    <div className="container">
      {totalStars.map((_, index) => {
        const value = index + 1;
        if (value <= fullStars) {
          return (
            <span key={value} className="star filled">
              ★
            </span>
          );
        } else if (value === fullStars + 1 && hasHalfStar) {
          return (
            <span key={value} className="star half-filled">
              ★
            </span>
          );
        } else {
          return (
            <span key={value} className="star">
              ★
            </span>
          );
        }
      })}
    </div>
  );
};

export default Rating;