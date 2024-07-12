import React from "react";
import s from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={(data, action) => {
          action.resetForm();
          console.log(data);
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
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
