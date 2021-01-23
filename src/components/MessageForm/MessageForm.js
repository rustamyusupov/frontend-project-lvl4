import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";

const MessageForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ message: "" }}
    onSubmit={({ message }, { setSubmitting }) => {
      onSubmit(message);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form noValidate>
        <div className="form-group">
          <div className="input-group">
            <Field
              name="message"
              aria-label="message"
              className="mr-2 form-control"
            />
            <button
              aria-label="submit"
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <div className="d-block invalid-feedback">&nbsp;</div>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);

MessageForm.propTypes = {
  onSubmit: PropTypes.func,
};

MessageForm.defaultProps = {
  onSubmit: () => {},
};

export default MessageForm;
