import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <Contact />
      </div>
    </div>
  );
};

export default ContactList;
