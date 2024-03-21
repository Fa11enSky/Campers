import React, { useState } from "react";
import svg from "../../assets/sprite.svg";
import css from "./styles.module.css";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";
import CamperForm from "../CamperForm/CamperForm";
const DetailsModal = ({ item, close }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const { price } = item
  const formattedPrice = price.toFixed(2).replace(".", ",");

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
      <span className={css.price}>€{formattedPrice}</span>
      <ul className={css.imageList}>
        {item.gallery.map((el, idx) => (
          <li className={css.imageItem} key={idx}>
            <img src={el} alt="camper" />
          </li>
        ))}
      </ul>
      <p className={css.description}>{item.description}</p>
      <div className={css.btnWrapper}>
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? css.isActive : null}
        >
          Features
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? css.isActive : null}
        >
          Reviews
        </button>
      </div>
      <hr className={css.hr} />
      <div className={css.addWrapper}>
        {activeTab === 1 && <Features item={item} />}
        {activeTab === 2 && <Reviews rev={item.reviews} />}
        {activeTab !== 0 && <CamperForm />}
      </div>
    </div>
  );
};

export default DetailsModal;
