import React from "react";
import s from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { FiUserPlus } from "react-icons/fi";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={(data, action) => {
          action.resetForm();
          onAdd({
            id: nanoid(),
            name: data.name,
            number: data.number,
          });
        }}
      >
        <Form className={s.form}>
          <label className={s.lable}>
            <span>Name</span>
            <Field
              className={s.input}
              name="name"
              placeholder="Contact name"
            ></Field>
          </label>
          <label className={s.lable}>
            <span>Number</span>
            <Field
              className={s.input}
              name="number"
              placeholder="Contact number"
            ></Field>
          </label>
          <button className={s.addContact} type="submit">
            <FiUserPlus />
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
