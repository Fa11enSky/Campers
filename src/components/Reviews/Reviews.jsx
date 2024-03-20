import React from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'
import css from './styles.module.css'
const Reviews = ({ rev }) => {
  return (
    <ul className={css.list}>
      {rev.map((el) => (
        <ReviewItem key={el.reviewer_name} rev={el} />
      ))}
    </ul>
  );
}

export default Reviews
