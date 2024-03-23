import React, { useEffect, useState } from "react";
import { filter, selectAllCampers } from "../../redux/catalog/selectors";
import { useSelector } from "react-redux";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./styles.module.css";
import NoDataFilter from "../NoDataFilter/NoDataFilter";
import { filterCampers } from "../../helpers/filter";

const CatalogList = () => {
  const campers = useSelector(selectAllCampers);
  const filters = useSelector(filter);
  const [displayedCards, setDisplayedCards] = useState(4);
  const [toShow, setToShow] = useState([]);

  const loadMore = () => {
    setDisplayedCards(displayedCards + 4);
  };

  useEffect(() => {
    if (
      Object.values(filters.forms).every((el) => Boolean(el) === false) &&
      Object.values(filters.details).every((el) => Boolean(el) === false) &&
      !filters.location
    ) {
      setToShow(campers);
      return;
    }
    setToShow(filterCampers(campers, filters));
  }, [campers, filters]);

  useEffect(() => {
    setDisplayedCards(4);
  }, [filters]);

  return (
    <div>
      {toShow.length ? (
        <>
          <ul>
            {toShow.slice(0, displayedCards).map((el) => (
              <CatalogItem key={el._id} item={el} />
            ))}
          </ul>
          {displayedCards < toShow.length && (
            <button
              className={css.loadMoreBtn}
              type="button"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </>
      ) : (
        <NoDataFilter />
      )}
    </div>
  );
};

export default CatalogList;
