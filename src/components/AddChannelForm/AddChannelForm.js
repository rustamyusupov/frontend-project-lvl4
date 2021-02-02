import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import { Button } from "react-bootstrap";

const AddChannelForm = ({ errors, isSubmitting, onClose }) => (
  <Form noValidate>
    <div className="form-group">
      <Field
        name="name"
        aria-label="name"
        className={`mb-2 form-control ${errors.name ? "is-invalid" : ""}`}
      />
      <div className="d-block mb-2 invalid-feedback">{errors?.name}</div>
      <div className="d-flex justify-content-end">
        <Button className="mr-2" variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          Submit
        </Button>
      </div>
    </div>
  </Form>
);

AddChannelForm.propTypes = {
  errors: PropTypes.shape({
    name: PropTypes.string,
  }),
  isSubmitting: PropTypes.bool,
  onClose: PropTypes.func,
};

AddChannelForm.defaultProps = {
  errors: {},
  isSubmitting: false,
  onClose: () => {},
};

export default AddChannelForm;
