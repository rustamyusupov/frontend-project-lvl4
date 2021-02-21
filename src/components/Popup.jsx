import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import validate from 'utils/validate';
import { createChannel, removeChannel, renameChannel } from 'slices/channels/thunk';
import { modalActions } from 'slices/modal/slice';
import modalSelector from 'slices/modal/selectors';
import ActionForm from 'components/ActionForm';
import Modal from 'components/Modal';

const map = {
  add: {
    action: 'submit',
    button: 'primary',
    input: true,
    title: 'addChannel',
    onSubmit: createChannel,
  },
  remove: {
    action: 'confirm',
    button: 'danger',
    input: false,
    title: 'removeChannel',
    onSubmit: removeChannel,
  },
  rename: {
    action: 'submit',
    button: 'primary',
    input: true,
    title: 'renameChannel',
    onSubmit: renameChannel,
  },
};

const Popup = ({ type }) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelector);
  const inputEl = useRef(null);
  const { t } = useTranslation();

  const show = modal.show && modal.type === type;
  const {
    action, button, input, title, onSubmit,
  } = map[type];

  useEffect(() => {
    inputEl.current?.focus();
  }, [show]);

  const handleClose = () => dispatch(modalActions.hide());
  const handleSubmit = async ({ name }, { setFieldError, setSubmitting }) => {
    const response = await dispatch(onSubmit({ id: modal.data?.id, name }));

    setSubmitting(false);

    if (response.error) {
      setFieldError('name', t(response.error?.message), false);
    } else {
      dispatch(modalActions.hide());
    }
  };

  return (
    <Modal
      show={show}
      title={t(title)}
      content={(
        <Formik
          initialValues={{ name: modal.data?.name ?? '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ errors, isSubmitting, touched }) => (
            <ActionForm
              action={t(action)}
              button={button}
              cancel={t('cancel')}
              error={t(errors?.name)}
              input={input}
              isSubmitting={isSubmitting}
              touched={touched}
              ref={inputEl}
              onClose={handleClose}
            />
          )}
        </Formik>
      )}
      onClose={handleClose}
    />
  );
};

Popup.propTypes = {
  type: PropTypes.oneOf(['add', 'rename', 'remove']).isRequired,
};

export default Popup;
