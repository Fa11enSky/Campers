import React, { useEffect, useState } from "react";
import { filter, selectAllCampers } from "../../redux/catalog/selectors";
import { useSelector } from "react-redux";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./styles.module.css";

const CatalogList = () => {
  const campers = useSelector(selectAllCampers);
  const [showCounter, setShowCounter] = useState(4);
  const [toShow, setToShow] = useState([]);
  const [isMore, setIsMore] = useState(true);
  const total = Math.ceil(campers.length / 4);
  const filters = useSelector(filter)
  
const toFilter = campers.filter(item => {
    return (
      (!filters.location || item.location === filter.location) &&
      (!filters.ac || item.details.airConditioner === 1) &&
      (!filters.automatic || item.transmission === "automatic") &&
      (!filters.kitchen || item.details.kitchen === 1) &&
      (!filters.tv || item.details.TV === 1) &&
      (!filters.bathroom || item.details.bathroom === 1) &&
      (!filters.van || item.van === 1) &&
      (!filters.fullyIntegrated || item.details.fullyIntegrated === 1) &&
      (!filters.alcove || item.form === "alcove")
    );
  })



  useEffect(() => {
    if (campers.length === 0) return;
    const d = campers.filter((_, idx) => {
      return idx < showCounter;
    });
    setToShow(d);
    if (campers.length <= showCounter) {
      setIsMore(false);
    }
  }, [campers, showCounter, toShow.length, total]);

  return (
    <div>
      <ul>
        {toShow.map((el) => (
          <CatalogItem key={el._id} item={el} />
        ))}
      </ul>
      {isMore && (
        <button
          className={css.loadMoreBtn}
          type="button"
          onClick={() => {
            setShowCounter(showCounter + 4);
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogList;
