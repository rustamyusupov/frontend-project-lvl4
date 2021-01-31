import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";

const MessageForm = ({ errors, isSubmitting }) => (
  <Form noValidate>
    <div className="form-group">
      <div className="input-group">
        <Field
          name="message"
          aria-label="message"
          className={`mr-2 form-control ${errors.message ? "is-invalid" : ""}`}
        />
        <button
          aria-label="submit"
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Submit
        </button>
        <div className="d-block invalid-feedback">{errors.message}&nbsp;</div>
      </div>
    </div>
  </Form>
);

MessageForm.propTypes = {
  errors: PropTypes.shape({
    message: PropTypes.string,
  }),
  isSubmitting: PropTypes.bool,
};

MessageForm.defaultProps = {
  errors: {},
  isSubmitting: false,
};

export default MessageForm;
