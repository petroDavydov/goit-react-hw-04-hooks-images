import React from "react";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useState } from "react/cjs/react.development";

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      return toast("Enter the name of the picture, please");
    }

    onSubmit(searchQuery);
    setSearchQuery("");
  };

  const handleNameChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={handleNameChange}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
