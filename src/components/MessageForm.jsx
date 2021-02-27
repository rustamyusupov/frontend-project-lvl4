import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormikForm, Field } from 'formik';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MessageForm = React.forwardRef(({ disabled, error }, ref) => {
  const { t } = useTranslation();

  return (
    <FormikForm noValidate>
      <Form.Group>
        <InputGroup>
          <Field
            name="message"
            aria-label="message"
            className={`mr-2 form-control ${error ? 'is-invalid' : ''}`}
            innerRef={ref}
            autoComplete="off"
          />
          <Button type="submit" disabled={disabled}>
            {t('submit')}
          </Button>
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </FormikForm>
  );
});

MessageForm.displayName = 'MessageForm';

MessageForm.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

MessageForm.defaultProps = {
  disabled: false,
  error: '',
};

export default MessageForm;
