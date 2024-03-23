import React, { useState } from "react";
import moment from "moment";
import Calendar from "../Calendar/Calendar";
import css from "./styles.module.css";
const CamperForm = () => {
  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  
  const [errors, setErrors] = useState({});

  const handleChange = (ev) => {
    if (ev.target.name === "name") setName(ev.target.value);
    if (ev.target.name === "email") setEmail(ev.target.value);
    if (ev.target.name === "comment") setComment(ev.target.value);
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "User name is required";
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Enter the correct email address";
    }
    if (!moment(data.startDate, "DD/MM/YYYY", true).isValid()) {
      errors.startDate = "Enter the correct date";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = { startDate, email, comment, name };
    const errors = validateForm(data);

    if (Object.keys(errors).length === 0) {
      window.location.reload();
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <p className={css.header}>Book your campervan now</p>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>
      <input
        onChange={handleChange}
        required
        name="name"
        className={css.nameInput}
        type="text"
        value={name}
        placeholder="Name"
      />
      {errors.name && <span className="error">{errors.name}</span>}
      <input
        onChange={handleChange}
        value={email}
        required
        name="email"
        className={css.emailInput}
        type="email"
        placeholder="Email"
      />
      {errors.email && <span className="error">{errors.email}</span>}
      <Calendar date={startDate} setDate={setStartDate} />
      {errors.startDate && <span className="error">{errors.startDate}</span>}
      <textarea
        onChange={handleChange}
        value={comment}
        name="comment"
        className={css.commentInput}
        type="text"
        placeholder="Comment"
      />
      <button className={css.smbBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default CamperForm;
