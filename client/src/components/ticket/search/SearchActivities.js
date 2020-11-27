import { Field, reduxForm } from 'redux-form';
import renderSelectField from '../form/renderSelectField';
import renderField from '../form/renderField';

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
      <div className="d-flex align-items-start">
        <Field name="activities" component={renderSelectField}>
          {activities.map((option) => (
            <option key={option.title} value={option.title}>
              {option.title}
            </option>
          ))}
        </Field>
        <Field name="date" type="date" component={renderField} label="Date" />
        <div className="button-search">
          <button
            className="btn btn-primary shadow rounded"
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

export default reduxForm({ form: 'SearchActivitiesForm' })(SearchActivities);
