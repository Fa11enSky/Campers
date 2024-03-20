import React from "react";
import svg from "../../assets/sprite.svg";
import css from "./styles.module.css";
const FeaturesDetailsList = ({ details }) => {
    const iconsMapping = {
      adults: "icon-user",
      airConditioner: "icon-conditioner",
      bathroom: "icon-bathroom",
      kitchen: "icon-kitchen",
      beds: "icon-bed",
      TV: "icon-tv",
      CD: "icon-cd",
      radio: "icon-radio",
      shower: "icon-shower",
      toilet: "icon-paper",
      freezer: "icon-freezer",
      hob: "icon-hob",
      microwave: "icon-microwave",
      gas: "icon-gass",
      water: "icon-water",
      transmission: "icon-transmission",
      engine:"icon-gas"
    };
  return (
    <ul className={css.detailsList}>
      {Object.keys(details).map((key, index) => (
        <li className={css.item} key={index}>
          <svg width={20} height={20} className={css.icon}>
            <use xlinkHref={`${svg}#${iconsMapping[key]}`} />
          </svg>
          <span>
            {key === "airConditioner"||key==="beds" ||key==="hob"||key==="adults"? details[key] : null}
            {key==="transmission"||key==="engine"?details[key]:` ${key}`}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesDetailsList;
