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
  const [toFilter, setToFilter] = useState([]);
  const [total, setTotal] = useState(Math.ceil(campers.length / 4));

  const filters = useSelector(filter);

  useEffect(() => {
    if (Object.values(filters).every((el) => Boolean(el) === false)) {
      setTotal(Math.ceil(campers.length / 4));
      setToFilter(campers);
      setIsMore(true);
    }

    const filtred = campers.filter((item) => {
      return (
        (!filters.location ||
          item.location.toLowerCase() === filters.location.toLowerCase()) &&
        (!filters.ac || item.details.airConditioner >= 1) &&
        (!filters.automatic || item.transmission === "automatic") &&
        (!filters.kitchen || item.details.kitchen >= 1) &&
        (!filters.tv || item.details.TV >= 1) &&
        (!filters.bathroom || item.details.bathroom >= 1) &&
        (!filters.van || item.form === "panelTruck") &&
        (!filters.fullyIntegrated || item.form === "fullyIntegrated") &&
        (!filters.alcove || item.form === "alcove")
      );
    });
    setTotal(Math.ceil(filters.length / 4));
    setToFilter(filtred);
    if (toFilter.length <= showCounter) {
      setIsMore(false);
    }
  }, [campers, filters, showCounter, toFilter.length]);

  useEffect(() => {
    if (toFilter.length === 0) return;
    const d = toFilter.filter((_, idx) => {
      return idx < showCounter;
    });
    setToShow(d);
    if (toFilter.length <= showCounter) {
      setIsMore(false);
    }
  }, [toFilter, showCounter, toShow.length, total]);

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
