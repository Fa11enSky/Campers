import React, { useState } from "react";
import svg from "../../assets/sprite.svg";
import css from "./styles.module.css";
import Reviews from "../Reviews/Reviews";
const DetailsModal = ({ item, close }) => {
  const [isReviewsShow, setIsReviewsShow] = useState({
    visibility: false,
    isActive: false,
  });
  const toggleReviews = () => {
    setIsReviewsShow({
      visibility: !isReviewsShow.visibility,
      isActive: !isReviewsShow.isActive,
    });
  };

  return (
    <div className={css.detailsModal}>
      <button className={css.close} onClick={close}>
        <svg className={css.closeSmb} width={32} height={32}>
          <use href={`${svg}#icon-close`} />
        </svg>
      </button>
      <h2 className={css.title}>{item.name}</h2>
      <div className={css.ratingWrapper}>
        <span className={css.rating}>
          <svg className={css.star} width={16} height={16}>
            <use href={`${svg}#icon-rating`} />
          </svg>{" "}
          {item.rating}({item.reviews.length} Rewiews)
        </span>
        <span>
          <svg className={css.map} width={16} height={16}>
            <use href={`${svg}#icon-map`} />
          </svg>
          {item.location}
        </span>
      </div>
      <span className={css.price}>€{item.price}</span>
      <ul className={css.imageList}>
        {item.gallery.map((el, idx) => (
          <li className={css.imageItem} key={idx}>
            <img src={el} alt="camper" />
          </li>
        ))}
      </ul>
      <p className={css.description}>{item.description}</p>
      <div className={css.btnWrapper}>
        <button>Features</button>
        <button onClick={toggleReviews} className={isReviewsShow.isActive&&css.isActive}>Reviews</button>
      </div>
      <hr className={css.hr} />
      {isReviewsShow.visibility && <Reviews rev={item.reviews} />}
    </div>
  );
};

export default DetailsModal;
