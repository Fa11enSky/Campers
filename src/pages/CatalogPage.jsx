import React, { useEffect } from "react";
import CatalogList from "../components/CatalogList/CatalogList";
import { useDispatch } from "react-redux";
import { getAllCampers } from "../redux/catalog/operations";
import Filter from "../components/Filter/Filter";

const CatalogPage = () => {
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(getAllCampers());
 }, [dispatch]);
  return (
    <div style={{ display: 'flex', gap: 64,justifyContent:"center" }}>
      <Filter/>
     <CatalogList/>
    </div>
  );
};

export default CatalogPage;
