const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'required';
  }

  if (values.name && (values.name.length < 3 || values.name.length > 20)) {
    errors.name = 'wrong length';
  }

  return errors;
};

export default validate;
