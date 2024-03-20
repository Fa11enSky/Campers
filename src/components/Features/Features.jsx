import React from "react";
import FeaturesDetailsList from "../FeaturesDetailsList/FeaturesDetailsList";
import css from "./stules.module.css";
const Features = ({ item }) => {
  const { adults, transmission, engine } = item;
  const detailsFull = { adults, transmission, engine, ...item.details };
  return (
    <div className={css.featuresEl}>
      <FeaturesDetailsList details={detailsFull} />

      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.tableHeader}>Vehicle details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Form</td>
            <td>{item.form}</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>{item.length}</td>
          </tr>
          <tr>
            <td>Width</td>
            <td>{item.width}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{item.height}</td>
          </tr>
          <tr>
            <td>Tank</td>
            <td>{item.tank}</td>
          </tr>
          <tr>
            <td>Consumption</td>
            <td>{item.consumption}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Features;
