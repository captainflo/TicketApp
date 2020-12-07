import { Field, reduxForm } from 'redux-form';
import renderSelectField from '../form/renderSelectField';
import renderField from '../form/renderField';
import validate from '../search/validation';
import moment from 'moment';

const SearchActivities = (props) => {
  const { handleSubmit, submitting, onSubmit } = props;
  const activities = [
    { title: 'All' },
    { title: 'Concerts' },
    { title: 'Sports' },
    { title: 'Arts & Theater' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex flex-wrap align-items-start">
        <Field name="activities" component={renderSelectField}>
          {activities.map((option) => (
            <option key={option.title} value={option.title}>
              {option.title}
            </option>
          ))}
        </Field>
        <div>
          <Field name="date" type="date" component={renderField} />
          <span className="label-date">
            Tickets availaible on or after this date
          </span>
        </div>

        <div className="button-search">
          <button
            className="btn btn-primary shadow rounded btn-website"
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'SearchActivitiesForm',
  validate,
  initialValues: { activities: 'All', date: moment().format('YYYY-MM-DD') },
})(SearchActivities);
