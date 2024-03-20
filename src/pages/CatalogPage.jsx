import React, { useEffect } from "react";
import CatalogList from "../components/CatalogList/CatalogList";
import { useDispatch } from "react-redux";
import { getAllCampers } from "../redux/catalog/operations";

const CatalogPage = () => {
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(getAllCampers());
 }, [dispatch]);
  return (
    <div>
     <CatalogList/>
    </div>
  );
};

export default CatalogPage;
