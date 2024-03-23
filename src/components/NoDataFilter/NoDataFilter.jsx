import React from "react";
import css from "./styles.module.css";
const NoDataFilter = () => {
  return (
    <div className={css.container}>
      Sorry, nothing was found, try changing the filters or reloading the page
    </div>
  );
};

export default NoDataFilter;
