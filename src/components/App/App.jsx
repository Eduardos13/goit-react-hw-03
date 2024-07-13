import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";
import initialContacts from "../../conacts.json";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.infoWrap}>
          <h1 className={s.mainTitle}>Phonebook</h1>
          <ContactForm onAdd={addContact} />
          <SearchBox value={filter} onFiltered={setFilter} />
          <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
      </div>
    </div>
  );
};

export default App;
