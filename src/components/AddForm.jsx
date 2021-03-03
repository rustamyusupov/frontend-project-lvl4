import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form as FormikForm, Field } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { channelValidationSchema } from 'utils/validate';
import { createChannel } from 'slices/channels/thunk';
import { modalActions } from 'slices/modal/slice';
import Modal from 'components/Modal';

const AddForm = () => {
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const { t } = useTranslation();

  const initialValues = { name: '' };

  useEffect(() => inputEl.current?.focus(), []);

  const handleClose = () => dispatch(modalActions.hideModal());

  const handleSubmit = async ({ name }, { setFieldError, setSubmitting }) => {
    const response = await dispatch(createChannel({ name: name.trim() }));

    setSubmitting(false);

    if (response.error) {
      setFieldError('name', t(response.error?.message), false);
    } else {
      dispatch(modalActions.hideModal());
    }
  };

  return (
    <Modal
      title={t('addChannel')}
      content={(
        <Formik
          initialValues={initialValues}
          validationSchema={channelValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors, dirty, isSubmitting, touched,
          }) => (
            <FormikForm noValidate>
              <Form.Group className="form-group">
                <Field
                  name="name"
                  aria-label="name"
                  className={cn('mb-2', 'form-control', { 'is-invalid': touched.name && errors.name })}
                  disabled={isSubmitting}
                  innerRef={inputEl}
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid" className="mb-2">
                  {touched.name && t(errors.name)}
                </Form.Control.Feedback>
                <div className="d-flex justify-content-end">
                  <Button className="mr-2" variant="secondary" onClick={handleClose}>
                    {t('cancel')}
                  </Button>
                  <Button variant="primary" type="submit" disabled={!dirty || isSubmitting}>
                    {t('submit')}
                  </Button>
                </div>
              </Form.Group>
            </FormikForm>
          )}
        </Formik>
      )}
      onClose={handleClose}
    />
  );
};

export default AddForm;
