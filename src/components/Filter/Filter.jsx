import React, { useState } from "react";
import svg from "../../assets/sprite.svg";
import css from "./styles.module.css";
import { useDispatch } from "react-redux";
import { filterUse } from "../../redux/catalog/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [location, setlocation] = useState("");
  const [details, setDetails] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
  });

  const [forms, setForms] = useState('');
  const handleClick = () => {
    dispatch(filterUse({ location, details, forms }));
  };

  const handleLocation = (ev) => {
    const { value } = ev.target;
    setlocation(value);
  };

  const handleRadio = (ev) => {
    const { value } = ev.target
    setForms(value)
  }
  

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setDetails({ ...details, [value]: checked });
    
      
  };
  return (
    <aside className={css.filterWrapper}>
      <span className={css.location}>Location</span>
      <label className={css.locationLabel}>
        <svg className={css.svg} width={18} height={20}>
          <use href={`${svg}#icon-map`} />
        </svg>
        <input
          onChange={handleLocation}
          value={location}
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
            checked={details.ac}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="details"
            value="ac"
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
            checked={details.automatic}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="details"
            value="automatic"
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
            checked={details.kitchen}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="details"
            value="kitchen"
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
            checked={details.tv}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="details"
            value="tv"
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
            checked={details.bathroom}
            onChange={handleCheckboxChange}
            className={css.equipmentCheckbox}
            type="checkbox"
            name="details"
            value="bathroom"
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
            onChange={handleRadio}
            className={css.typeCheckbox}
            type="radio"
            name="forms"
            value="panelTruck"
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
            onChange={handleRadio}
            className={css.typeCheckbox}
            type="radio"
            name="forms"
            value="fullyIntegrated"
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
            onChange={handleRadio}
            className={css.typeCheckbox}
            type="radio"
            name="forms"
            value="alcove"
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
    </aside>
  );
};

export default Filter;
