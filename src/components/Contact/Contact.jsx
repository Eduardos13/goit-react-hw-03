import React from "react";
import s from "./Contact.module.css";
import { TiUser } from "react-icons/ti";
import { MdLocalPhone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Contact = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.contactWrapper}>
          <div className={s.infoWrapper}>
            <p className={s.contactInfo}>
              <TiUser />
              User name
            </p>
            <p className={s.contactInfo}>
              <MdLocalPhone />
              User number
            </p>
          </div>
          <button className={s.deleteBtn}>
            <RxCross1 className={s.deleteIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
