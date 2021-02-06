import React from "react";
import PropTypes from "prop-types";
import { Form as FormikForm, Field } from "formik";
import { Form, Button } from "react-bootstrap";

const AddChannelForm = React.forwardRef(
  ({ errors, isSubmitting, onClose }, ref) => (
    <FormikForm noValidate>
      <Form.Group className="form-group">
        <Field
          name="name"
          aria-label="name"
          className={`mb-2 form-control ${errors.name ? "is-invalid" : ""}`}
          innerRef={ref}
        />
        <Form.Control.Feedback type="invalid" className="mb-2">
          {errors?.name}
        </Form.Control.Feedback>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </Form.Group>
    </FormikForm>
  )
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
