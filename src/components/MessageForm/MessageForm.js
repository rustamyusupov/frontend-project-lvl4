import React from "react";
import PropTypes from "prop-types";
import { Form as FormikForm, Field } from "formik";
import { Form, InputGroup, Button } from "react-bootstrap";

const MessageForm = React.forwardRef(({ errors, isSubmitting }, ref) => (
  <FormikForm noValidate>
    <Form.Group>
      <InputGroup>
        <Field
          name="message"
          aria-label="message"
          className={`mr-2 form-control ${errors.message ? "is-invalid" : ""}`}
          innerRef={ref}
        />
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
        <Form.Control.Feedback type="invalid">
          {errors.message}&nbsp;
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  </FormikForm>
));

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
