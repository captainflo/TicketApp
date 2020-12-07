import moment from 'moment';
const validate = (values) => {
  let timeNow = moment().format('YYYY-DD-MM');
  const errors = {};

  if (!values.date) {
    errors.date = 'Required';
  } else if (moment.utc(values.date).format('YYYY-DD-MM') < timeNow) {
    errors.date = 'must be equal or higher than today';
  }

  return errors;
};

export default validate;
