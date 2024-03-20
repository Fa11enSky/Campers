import React from "react";
import css from "./styles.module.css";
import RatingStars from "../RatingStars/RatingStars";
const ReviewItem = ({ rev }) => {
    
  

  return (
    <li className={css.item}>
      <div className={css.headWrapper}>
          <span className={css.firstLetter}>{rev.reviewer_name[0].toUpperCase()}</span>
          <div className={css.nameWrapper}>
              <h4 className={css.name}>{rev.reviewer_name}</h4>
              <RatingStars rating={rev.reviewer_rating}/>
          </div>
      </div>
      <p className={css.comment}>{rev.comment}</p>
    </li>
  );
};

export default ReviewItem;
