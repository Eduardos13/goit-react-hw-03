import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <label>
          <span>Search</span>
          <input type="text" />
        </label>
      </div>
    </div>
  );
};

export default SearchBox;
