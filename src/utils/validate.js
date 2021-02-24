const validate = (values) => {
  const errors = {};
  const minNameLength = 3;
  const maxNameLength = 20;

  if (!values.name) {
    errors.name = 'required';
  }

  if (
    values.name
    && (values.name.length < minNameLength || values.name.length > maxNameLength)
  ) {
    errors.name = 'wrong length';
  }

  return errors;
};

export default validate;
