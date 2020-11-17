import moment from 'moment';
const validate = (values) => {
  let timeNow = new Date().toISOString().split('T')[0];
  const today = moment(timeNow).toDate().getTime();

  const errors = {};

  if (!values.date) {
    errors.date = 'Required';
  } else if (moment(values.date).toDate().getTime() < today) {
    errors.date = 'must be equal or higher than today';
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
