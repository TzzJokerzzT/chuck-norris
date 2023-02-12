import { Formik, Form, Field } from "formik";
import { ChuckAPI } from "../api/API";
import { useState } from "react";
import Jesting from "./Jesting";
import "./Input.css";

export const Input = () => {
  const [value, setValue] = useState([]);
  return (
    <article className="input-position">
      <Jesting value={value} />
      <Formik
        initialValues={{ search: "" }}
        onSubmit={async (values) => {
          const chuckFetch = await ChuckAPI(values.search);
          setValue(chuckFetch);
        }}
      >
        <Form>
          <Field
            className="input-field"
            name="search"
            placeholder="Put you a word..."
            type="text"
          />
          <button className="input-buttom" type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </article>
  );
};
