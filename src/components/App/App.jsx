import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.infoWrap}>
          <h1 className={s.mainTitle}>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
