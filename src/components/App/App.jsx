import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";
import initialContacts from "../../conacts.json";
import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.infoWrap}>
          <h1 className={s.mainTitle}>Phonebook</h1>
          <ContactForm onAdd={addContact} />
          <SearchBox />
          <ContactList contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default App;
