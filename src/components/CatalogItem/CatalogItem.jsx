import React from "react";
import svg from "../../assets/sprite.svg";
import css from "./styles.module.css";
import IconsSmallList from "../IconsSmallList/IconsSmallList";
const CatalogItem = ({ item }) => {
  console.log(item);

  return (
    <li className={css.catalogItem}>
      <div className={css.thumb}>
        <img src={item.gallery[0]} alt="camper" />
      </div>
      <div className={css.itemWrapper}>
        <div className={css.titleWrapper}>
          <h3 className={css.itemTitle}>{item.name}</h3>
          <div className={css.priceWrapper}>
            <span className={css.price}>€{item.price}</span>
            <svg className={css.heart} width={24} height={24}>
              <use href={`${svg}#icon-heart`} />
            </svg>
          </div>
        </div>
        <div className={css.ratingWrapper}>
          <span className={css.rating}>
            <svg className={css.star} width={16} height={16}>
              <use href={`${svg}#icon-rating`} />
            </svg>{" "}
            {item.rating}({item.reviews.length} Rewiews)
          </span>
          <span>
            <svg className={css.map} width={16} height={16}>
              <use href={`${svg}#icon-map`}/>
            </svg>
            {item.location}</span>
        </div>
        <p className={css.description}>{item.description}</p>
        <IconsSmallList data={item} />
        <button></button>
      </div>
    </li>
  );
};

export default CatalogItem;
