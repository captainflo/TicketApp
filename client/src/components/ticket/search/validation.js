const validate = (values) => {
  const errors = {};
  if (!values.date) {
    errors.date = 'Required date';
  }

  return errors;
};

export default validate;
