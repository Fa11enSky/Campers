import React from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const maxStars = 5;
  const filledStars = rating;

  return (
    <div>
      {[...Array(maxStars)].map((_, index) => {
        return (
          <span key={index}>
            <FaStar
              color={index < filledStars ? "#ffc531" : "#f2f4f7"}
              style={{ marginRight: "2px" }}
            />
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;
