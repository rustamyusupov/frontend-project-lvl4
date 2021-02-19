import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import validate from 'utils/validate';
import { createChannel, renameChannel, removeChannel } from 'modules/Channels/slice';
import { modalActions } from 'modules/Modal/slice';
import getCurrent from 'modules/Modal/selectors';
import ActionForm from 'components/ActionForm';
import Modal from 'components/Modal';

const map = {
  add: {
    action: 'Submit',
    button: 'primary',
    input: true,
    title: 'Add channel',
    onSubmit: createChannel,
  },
  remove: {
    action: 'Confirm',
    button: 'danger',
    input: false,
    title: 'Remove channel',
    onSubmit: removeChannel,
  },
  rename: {
    action: 'Submit',
    button: 'primary',
    input: true,
    title: 'Rename channel',
    onSubmit: renameChannel,
  },
};

const Popup = ({ type }) => {
  const dispatch = useDispatch();
  const modal = useSelector(getCurrent);
  const inputEl = useRef(null);

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
      setFieldError('name', response.error?.message, false);
    } else {
      dispatch(modalActions.hide());
    }
  };

  return (
    <Modal
      show={show}
      title={title}
      content={(
        <Formik
          initialValues={{ name: modal.data?.name ?? '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ errors, isSubmitting, touched }) => (
            <ActionForm
              action={action}
              button={button}
              errors={errors}
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
