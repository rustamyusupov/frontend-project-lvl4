import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormikForm, Field } from 'formik';
import { Form, Button } from 'react-bootstrap';

const ActionForm = React.forwardRef(
  ({
    action, button, errors, input, isSubmitting, touched, onClose,
  }, ref) => (
    <FormikForm noValidate>
      <Form.Group className="form-group">
        <Field
          name="name"
          aria-label="name"
          className={
            `mb-2 form-control ${touched.name && errors.name ? 'is-invalid' : ''}`
          }
          disabled={!input}
          innerRef={ref}
          autoComplete="off"
        />
        <Form.Control.Feedback type="invalid" className="mb-2">
          {touched.name && errors?.name}
        </Form.Control.Feedback>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant={button} type="submit" disabled={isSubmitting}>
            {action}
          </Button>
        </div>
      </Form.Group>
    </FormikForm>
  ),
);

ActionForm.displayName = 'ActionForm';

ActionForm.propTypes = {
  action: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
  }),
  input: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool,
  onClose: PropTypes.func,
};

ActionForm.defaultProps = {
  errors: {},
  isSubmitting: false,
  onClose: () => { },
};

export default ActionForm;
