import React from "react";
import svg from "../../assets/sprite.svg";
import css from './styles.module.css'
const IconsSmallList = ({ data }) => {
  return (
    <ul className={css.mainList}>
      <li>
        <svg className={css.user} width={20} height={20}>
          <use href={`${svg}#icon-user`} />
        </svg>
        {data.adults} adults
      </li>
      <li>
        <svg className={css.transmission} width={20} height={20}>
          <use href={`${svg}#icon-transmission`} />
        </svg>
        {data.transmission}
      </li>
      <li>
        <svg className={css.gas} width={20} height={20}>
          <use href={`${svg}#icon-gas`} />
        </svg>
        {data.engine}
      </li>
      <li>
        <svg className={css.kitchen} width={20} height={20}>
          <use href={`${svg}#icon-kitchen`} />
        </svg>
        Kitchen
      </li>
      <li>
        <svg className={css.bed} width={20} height={20}>
          <use href={`${svg}#icon-bed`} />
        </svg>
        {data.details.beds} beds
      </li>
      {data.details.airConditioner && (
        <li>
          <svg width={20} height={20}>
            <use href={`${svg}#icon-ac`}/>
          </svg>
          AC
        </li>
      )}
    </ul>
  );
};

export default IconsSmallList;
