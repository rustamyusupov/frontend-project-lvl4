import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormikForm, Field } from 'formik';
import { Form, Button } from 'react-bootstrap';

const ActionForm = React.forwardRef(
  ({
    action, button, cancel, error, input, isDisabled, touched, onClose,
  }, ref) => (
    <FormikForm noValidate>
      <Form.Group className="form-group">
        <Field
          name="name"
          aria-label="name"
          className={
            `mb-2 form-control ${touched.name && error ? 'is-invalid' : ''}`
          }
          disabled={!input}
          innerRef={ref}
          autoComplete="off"
        />
        <Form.Control.Feedback type="invalid" className="mb-2">
          {touched.name && error}
        </Form.Control.Feedback>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" variant="secondary" onClick={onClose}>
            {cancel}
          </Button>
          <Button variant={button} type="submit" disabled={isDisabled}>
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
  cancel: PropTypes.string.isRequired,
  error: PropTypes.string,
  input: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  onClose: PropTypes.func,
};

ActionForm.defaultProps = {
  error: {},
  isDisabled: false,
  onClose: () => { },
};

export default ActionForm;
