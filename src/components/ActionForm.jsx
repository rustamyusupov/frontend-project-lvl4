import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form as FormikForm, Field } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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
    onSubmit: createChannel,
  },
  remove: {
    action: 'confirm',
    button: 'danger',
    title: 'removeChannel',
    onSubmit: removeChannel,
  },
  rename: {
    action: 'submit',
    button: 'primary',
    title: 'renameChannel',
    onSubmit: renameChannel,
  },
};

const ActionForm = ({ type }) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelector);
  const inputEl = useRef(null);
  const { t } = useTranslation();

  const show = modal.show && modal.type === type;
  const {
    action, button, title, onSubmit,
  } = map[type];

  useEffect(() => {
    inputEl.current?.focus();
  }, [show]);

  const handleClose = () => dispatch(modalActions.hideModal());
  const handleSubmit = async ({ name }, { setFieldError, setSubmitting }) => {
    const response = await dispatch(onSubmit({ id: modal.data?.id, name }));

    setSubmitting(false);

    if (response.error) {
      setFieldError('name', t(response.error?.message), false);
    } else {
      dispatch(modalActions.hideModal());
    }
  };

  return (
    <Modal
      show={show}
      title={t(title)}
      content={(
        <Formik
          initialValues={{ name: modal.data?.name ?? '' }}
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
                  className={
                    `mb-2 form-control ${touched.name && errors.name ? 'is-invalid' : ''}`
                  }
                  disabled={action === 'confirm'}
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
                  <Button variant={button} type="submit" disabled={(!dirty && type !== 'remove') || isSubmitting}>
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
