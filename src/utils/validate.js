const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (values.name?.length < 3 || values.name?.length > 20) {
    errors.name = 'Must be 3 to 20 characters';
  }

  return errors;
};

export default validate;
