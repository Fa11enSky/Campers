import React, { useState } from "react";
import svg from "../../assets/sprite.svg";
import css from "./styles.module.css";
import IconsSmallList from "../IconsSmallList/IconsSmallList";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/favorites/favoritesSlice";
import { getFavorites } from "../../redux/favorites/selectors";
import Backdrop from "../Backdrop/Backdrop";
import DetailsModal from "../DetailsModal/DetailsModal";
const CatalogItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(getFavorites);

  const idx = favorites.findIndex((el) => el._id === item._id);

  const dispatch = useDispatch();
  const { price } = item;
  const formattedPrice = price.toFixed(2).replace(".", ",");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFav = () => {
    if (idx === -1) {
      dispatch(addFavorites(item));
      return;
    }
    dispatch(removeFavorites(item._id));
  };

  const heartStyle = {
    fill: idx !== -1 ? "#e44848" : "#ffffff",
    stroke: idx !== -1 ? "#e44848" : "#101828",
  };

  return (
    <li className={css.catalogItem}>
      <div className={css.thumb}>
        <img src={item.gallery[0]} alt="camper" />
      </div>
      <div className={css.itemWrapper}>
        <div className={css.titleWrapper}>
          <h3 className={css.itemTitle}>{item.name}</h3>
          <div className={css.priceWrapper}>
            <span className={css.price}>€{formattedPrice}</span>
            <button onClick={handleFav} className={css.favBtn}>
              <svg
                style={heartStyle}
                className={css.heart}
                width={24}
                height={24}
              >
                <use href={`${svg}#icon-heart`} />
              </svg>
            </button>
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
              <use href={`${svg}#icon-map`} />
            </svg>
            {item.location}
          </span>
        </div>
        <p className={css.description}>{item.description}</p>
        <IconsSmallList data={item} />
        <button onClick={toggleModal} className={css.showMore}>
          Show more
        </button>
      </div>
      {isModalOpen && (
        <Backdrop close={toggleModal}>
          <DetailsModal item={item} close={toggleModal} />
        </Backdrop>
      )}
    </li>
  );
};

export default CatalogItem;
