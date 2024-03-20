import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCampers } from "../redux/catalog/selectors";
import { getAllCampers } from "../redux/catalog/operations";
import CatalogItem from "../components/CatalogItem/CatalogItem";

const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);
  console.log(campers)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {campers.map((el) => (
          <CatalogItem item={el} />
        ))}
      </ul>
    </div>
  );
};

export default CatalogPage;
