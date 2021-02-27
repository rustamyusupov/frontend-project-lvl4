import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { inputValidationSchema } from 'utils/validate';
import { currentChannelSelector } from 'slices/channels/selectors';
import createMessage from 'slices/messages/thunk';
import { useUser } from 'context';
import MessageForm from 'components/MessageForm';

const initialValues = {
  message: '',
};

const InputForm = () => {
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
        <MessageForm disabled={!dirty || isSubmitting} errors={errors} ref={inputEl} />
      )}
    </Formik>
  );
};

export default InputForm;
