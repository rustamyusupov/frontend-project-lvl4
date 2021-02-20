import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { channelSelectors } from 'slices/channels';
import { messageThunks } from 'slices/messages';
import { useUser } from 'context';
import MessageForm from 'components/MessageForm';

const initialValues = {
  message: '',
};

const InputForm = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(channelSelectors.getCurrentChannel);
  const inputEl = useRef(null);
  const userName = useUser();

  useEffect(() => {
    inputEl.current?.focus();
  }, [id]);

  const handleSubmit = async (
    { message },
    { setFieldError, resetForm, setSubmitting },
  ) => {
    const response = await dispatch(
      messageThunks.createMessage({ channel: id, userName, text: message }),
    );

    setSubmitting(false);

    if (response.error) {
      setFieldError('message', response.error?.message, false);
      return;
    }

    resetForm();
    inputEl.current?.focus();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ dirty, errors, isSubmitting }) => (
        <MessageForm disabled={isSubmitting || !dirty} errors={errors} ref={inputEl} />
      )}
    </Formik>
  );
};

export default InputForm;
