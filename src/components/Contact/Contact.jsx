import React from "react";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.contactWrapper}>
          <div>
            <p>test text</p>
            <p>test text</p>
          </div>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
