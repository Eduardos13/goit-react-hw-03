import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <li key={contacts.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
