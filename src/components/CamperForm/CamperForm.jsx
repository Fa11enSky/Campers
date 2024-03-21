import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import css from "./styles.module.css";
const CamperForm = () => {
  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const handleChange = (ev) => {
    if (ev.target.name === "name") setName(ev.target.value);
    if (ev.target.name === "email") setEmail(ev.target.value);
    if (ev.target.name === "comment") setComment(ev.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || startDate.length === 0 || email.length === 0) {
      alert("some required field is empty");
      return;
    }
    window.location.reload();
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
      <input
        onChange={handleChange}
        value={email}
        required
        name="email"
        className={css.emailInput}
        type="email"
        placeholder="Email"
      />
      <Calendar date={startDate} setDate={setStartDate} />

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
