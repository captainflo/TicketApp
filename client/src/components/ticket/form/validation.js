import moment from 'moment';
const validate = (values) => {
  let timeNow = moment().format('YYYY-DD-MM');

  const errors = {};

  if (!values.date) {
    errors.date = 'Required';
  } else if (moment.utc(values.date).format('YYYY-DD-MM') < timeNow) {
    errors.date = 'must be equal or higher than today';
  }

  if (!values.time) {
    errors.time = 'Required';
  }

  if (!values.seat) {
    errors.seat = 'Required';
  }

  if (!values.activities) {
    errors.activities = 'Required';
  }

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (values.price <= 0) {
    errors.price = 'must be higher than zero';
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  return errors;
};

export default validate;
