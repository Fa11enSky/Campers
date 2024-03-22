import React, { useEffect, useState } from "react";
import { filter, selectAllCampers } from "../../redux/catalog/selectors";
import { useSelector } from "react-redux";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./styles.module.css";

const CatalogList = () => {
  const campers = useSelector(selectAllCampers);
  const filters = useSelector(filter);

  const [displayedCards, setDisplayedCards] = useState(4);
  const [toShow, setToShow] = useState([]);

  const loadMore = () => {
    setDisplayedCards(displayedCards + 4);
  };
  useEffect(() => {
    if (Object.values(filters).every((el) => Boolean(el) === false)) {
      setToShow(campers);
      return;
    }

    const filtred = campers.filter((item) => {
      return (
        (!filters.location || item.location === filter.location) &&
        (!filters.ac || (item.details && item.details.airConditioner >= 1)) &&
        (!filters.automatic || item.transmission === "automatic") &&
        (!filters.kitchen || item.details.kitchen >= 1) &&
        (!filters.tv || item.details.TV >= 1) &&
        (!filters.bathroom || item.details.bathroom >= 1) &&
        (filters.van||filters.fullyIntegrated||filters.alcove)&&
        ((filters.van && item.form === "panelTruck" ) ||
        (filters.fullyIntegrated && item.form === "fullyIntegrated") ||
        (filters.alcove && item.form === "alcove"))
      );
    });
    setToShow(filtred);
  }, [campers, filters]);
  useEffect(() => {
    setDisplayedCards(4);
  }, [filters]);
  return (
    <div>
      <ul>
        {toShow.slice(0, displayedCards).map((el) => (
          <CatalogItem key={el._id} item={el} />
        ))}
      </ul>
      {displayedCards < toShow.length && (
        <button className={css.loadMoreBtn} type="button" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogList;
