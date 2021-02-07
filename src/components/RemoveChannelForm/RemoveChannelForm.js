import React from "react";
import PropTypes from "prop-types";
import { Form as FormikForm, Field } from "formik";
import { Form, Row, Button } from "react-bootstrap";

const RemoveChannelForm = React.forwardRef(({ isSubmitting, onClose }, ref) => (
  <FormikForm noValidate>
    <Form.Group className="form-group">
      <Form.Label>Are you sure?</Form.Label>
      <div className="d-flex justify-content-end">
        <Button className="mr-2" variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" type="submit" disabled={isSubmitting}>
          Confirm
        </Button>
      </div>
    </Form.Group>
  </FormikForm>
));

RemoveChannelForm.propTypes = {
  isSubmitting: PropTypes.bool,
  onClose: PropTypes.func,
};

RemoveChannelForm.defaultProps = {
  isSubmitting: false,
  onClose: () => {},
};

export default RemoveChannelForm;
