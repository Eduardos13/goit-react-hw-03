import React from "react";
import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiUserPlus } from "react-icons/fi";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const addingSchema = Yup.object({
    name: Yup.string()
      .required("This fiels is required")
      .min(3, "Name has to be more than 3 chars!")
      .max(20, "Too long name"),
    number: Yup.number()
      .required("This fiels is required")
      .min(999999999, "Please put a valid number"),
  });
  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={addingSchema}
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
            <ErrorMessage name="name" />
          </label>
          <label className={s.lable}>
            <span>Number</span>
            <Field
              className={s.input}
              name="number"
              placeholder="Contact number"
            ></Field>
            <ErrorMessage name="number" />
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
