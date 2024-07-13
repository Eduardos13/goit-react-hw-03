import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFiltered }) => {
  return (
    <div>
      <div className={s.wrapper}>
        <label className={s.lable}>
          <span>Search</span>
          <input
            className={s.input}
            type="text"
            value={value}
            onChange={(event) => onFiltered(event.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default SearchBox;
