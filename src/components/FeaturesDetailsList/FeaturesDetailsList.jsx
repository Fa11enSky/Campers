import React from "react";
import svg from "../../assets/sprite.svg";
import css from "./styles.module.css";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";
const FeaturesDetailsList = ({ details }) => {
  const iconsMapping = {
    AC: "icon-ac",
    adults: "icon-user",
    "air conditioner": "icon-conditioner",
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
    engine: "icon-gas",
  };

  const data = [];

  for (const key in details) {
    if (key === "bathroom") continue;

    if (
      key === "transmission" ||
      key === "engine" ||
      Number.parseInt(details[key]) !== 0
    ) {
      if (key === "airConditioner") {
        data.splice(2, 0, "AC");
        data.push("air conditioner");
      } else {
        data.push(key);
      }
    }
  }

  return (
    <ul className={css.detailsList}>
      {data.map((key, index) => (
        <li className={css.item} key={index}>
          <svg width={20} height={20} className={css.icon}>
            <use xlinkHref={`${svg}#${iconsMapping[key]}`} />
          </svg>
          <span>
            {key === "airConditioner" ||
            key === "beds" ||
            key === "hob" ||
            key === "adults"
              ? details[key]
              : ""}
            {key === "transmission" || key === "engine"
              ? capitalizeFirstLetter(details[key])
              : ` ${key}`}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesDetailsList;
