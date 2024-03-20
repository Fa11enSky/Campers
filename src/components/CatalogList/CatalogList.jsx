import React, { useEffect, useState } from "react";
import { selectAllCampers } from "../../redux/catalog/selectors";
import { useSelector } from "react-redux";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./styles.module.css";

const CatalogList = () => {
  const campers = useSelector(selectAllCampers);
  const [showCounter, setShowCounter] = useState(4);
  const [toShow, setToShow] = useState([]);
  const [isMore, setIsMore] = useState(true);
  const total = Math.ceil(campers.length / 4);
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
