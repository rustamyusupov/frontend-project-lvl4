import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form as FormikForm, Field } from 'formik';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { inputValidationSchema } from 'utils/validate';
import { currentChannelSelector } from 'slices/channels/selectors';
import createMessage from 'slices/messages/thunk';
import { useUser } from 'userContext';

const initialValues = {
  message: '',
};

const MessageForm = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentChannelSelector);
  const inputEl = useRef(null);
  const userName = useUser();
  const { t } = useTranslation();

  useEffect(() => {
    inputEl.current?.focus();
  }, [id]);

  const handleSubmit = async (
    { message },
    { setFieldError, resetForm, setSubmitting },
  ) => {
    const response = await dispatch(
      createMessage({ channel: id, userName, text: message }),
    );

    setSubmitting(false);

    if (response.error) {
      setFieldError('message', t(response.error?.message), false);
      return;
    }

    resetForm();
    inputEl.current?.focus();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={inputValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ dirty, errors, isSubmitting }) => (
        <FormikForm noValidate>
          <Form.Group>
            <InputGroup>
              <Field
                name="message"
                aria-label="message"
                className={cn('mr-2', 'form-control', { 'is-invalid': errors.messages })}
                innerRef={inputEl}
                autoComplete="off"
              />
              <Button type="submit" disabled={!dirty || isSubmitting}>
                {t('submit')}
              </Button>
              <Form.Control.Feedback type="invalid">
                {t(errors.message)}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </FormikForm>
      )}
    </Formik>
  );
};

export default MessageForm;
