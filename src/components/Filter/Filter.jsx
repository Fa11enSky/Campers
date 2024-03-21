import React, { useState } from "react";
import svg from "../../assets/sprite.svg";
import css from "./styles.module.css";
import { useDispatch } from "react-redux";
import { filterUse } from "../../redux/catalog/filterSlice";
const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    location: "",
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    van: false,
    fullyIntegrated: false,
    alcove: false,
  });
  const handleClick = () => {
    dispatch(filterUse(filter));
  };

  const handleLocation = (ev) => {
    const { value } = ev.target;
    setFilter({ ...filter, location: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilter({ ...filter, [name]: checked });
  };
  return (
    <div className={css.filterWrapper}>
      <span className={css.location}>Location</span>
      <label className={css.locationLabel}>
        <svg className={css.svg} width={18} height={20}>
          <use href={`${svg}#icon-map`} />
        </svg>
        <input
          onChange={handleLocation}
          value={filter.location}
          name="location"
          placeholder="Kyiv, Ukraine"
          className={css.locationInput}
          type="text"
        />
      </label>
      <span className={css.filtresTitle}>Filters</span>
      <p className={css.equipment}>Vehicle equipment</p>
      <hr className={css.hr} />
      <ul className={css.equipmentList}>
        <li>
          <input
            checked={filter.ac}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="ac"
            id="ac"
          />
          <label htmlFor="ac">
            <svg width={32} height={32}>
              <use href={`${svg}#icon-ac`} />
            </svg>
            AC
          </label>
        </li>
        <li>
          <input
            checked={filter.automatic}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="automatic"
            id="transmission"
          />
          <label htmlFor="transmission">
            <svg className={css.svg} width={32} height={32}>
              <use href={`${svg}#icon-transmission`} />
            </svg>
            Automatic
          </label>
        </li>
        <li>
          <input
            checked={filter.kitchen}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="kitchen"
            id="kitchen"
          />
          <label htmlFor="kitchen">
            <svg className={css.svg} width={32} height={32}>
              <use href={`${svg}#icon-kitchen`} />
            </svg>
            Kitchen
          </label>
        </li>
        <li>
          <input
            checked={filter.tv}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="tv"
            id="tv"
          />
          <label htmlFor="tv">
            <svg className={css.svg} width={32} height={32}>
              <use href={`${svg}#icon-tv`} />
            </svg>
            TV
          </label>
        </li>
        <li>
          <input
            checked={filter.bathroom}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="bathroom"
            id="bathroom"
          />
          <label htmlFor="bathroom">
            <svg className={css.svg} width={32} height={32}>
              <use href={`${svg}#icon-shower`} />
            </svg>
            Shower/WC
          </label>
        </li>
      </ul>
      <p className={css.equipment}>Vehicle type</p>
      <hr className={css.hr} />
      <ul className={css.equipmentList}>
        <li>
          <input
            checked={filter.van}
            onChange={handleCheckboxChange}
            className={css.typeCheckbox}
            type="checkbox"
            name="van"
            id="van"
          />
          <label htmlFor="van">
            <svg width={32} height={32}>
              <use href={`${svg}#icon-camper1`} />
            </svg>
            Van
          </label>
        </li>
        <li>
          <input
            checked={filter.fullyIntegrated}
            onChange={handleCheckboxChange}
            className={css.typeCheckbox}
            type="checkbox"
            name="fullyIntegrated"
            id="fullyIntegrated"
          />
          <label htmlFor="fullyIntegrated">
            <svg width={32} height={32}>
              <use href={`${svg}#icon-camper2`} />
            </svg>
            Fully Integrated
          </label>
        </li>
        <li>
          <input
            checked={filter.alcove}
            onChange={handleCheckboxChange}
            className={css.typeCheckbox}
            type="checkbox"
            name="alcove"
            id="alcove"
          />
          <label htmlFor="alcove">
            <svg width={32} height={32}>
              <use href={`${svg}#icon-camper3`} />
            </svg>
            Alcove
          </label>
        </li>
      </ul>
      <button onClick={handleClick} className={css.serchBtn}>
        Search
      </button>
    </div>
  );
};

export default Filter;
