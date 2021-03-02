import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form as FormikForm, Field } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { channelValidationSchema } from 'utils/validate';
import { createChannel, removeChannel, renameChannel } from 'slices/channels/thunk';
import { modalActions } from 'slices/modal/slice';
import modalSelector from 'slices/modal/selectors';
import Modal from 'components/Modal';

const map = {
  add: {
    action: 'submit',
    button: 'primary',
    title: 'addChannel',
    isRemove: false,
    onSubmit: createChannel,
  },
  remove: {
    action: 'confirm',
    button: 'danger',
    title: 'removeChannel',
    isRemove: true,
    onSubmit: removeChannel,
  },
  rename: {
    action: 'submit',
    button: 'primary',
    title: 'renameChannel',
    isRemove: false,
    onSubmit: renameChannel,
  },
};

const ActionForm = ({ type }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(modalSelector);
  const inputEl = useRef(null);
  const { t } = useTranslation();

  const {
    action, button, title, isRemove, onSubmit,
  } = map[type];
  const initialValues = { name: data?.name ?? '' };

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const handleClose = () => dispatch(modalActions.hideModal());
  const handleSubmit = async ({ name }, { setFieldError, setSubmitting }) => {
    const response = await dispatch(onSubmit({ id: data?.id, name: name.trim() }));

    setSubmitting(false);

    if (response.error) {
      setFieldError('name', t(response.error?.message), false);
    } else {
      dispatch(modalActions.hideModal());
    }
  };

  return (
    <Modal
      title={t(title)}
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
                  disabled={isRemove}
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
                  <Button variant={button} type="submit" disabled={(!dirty && !isRemove) || isSubmitting}>
                    {t(action)}
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

ActionForm.propTypes = {
  type: PropTypes.oneOf(['add', 'rename', 'remove']).isRequired,
};

export default ActionForm;
