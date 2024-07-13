import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <label className={s.lable}>
          <span>Search</span>
          <input className={s.input} type="text" />
        </label>
      </div>
    </div>
  );
};

export default SearchBox;
