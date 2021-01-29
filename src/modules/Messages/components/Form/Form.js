import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";

const MessageForm = ({ isSubmitting }) => (
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
);

MessageForm.propTypes = {
  isSubmitting: PropTypes.bool,
};

MessageForm.defaultProps = {
  isSubmitting: false,
};

export default MessageForm;
