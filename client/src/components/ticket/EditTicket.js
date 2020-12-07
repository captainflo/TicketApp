import React, { useState } from 'react';
import renderField from './form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import Widget from '../utils/cloudinary/Widget';
import WrapperCard from '../utils/wrapperCard/WrapperCard';
import renderSelectField from './form/renderSelectField';

const EditTicket = (props) => {
  const id = props.match.params.id;
  const error = useSelector((state) => state.auth.errorMessage);

  const [image, setImage] = useState('');
  const [publicId, setPublicId] = useState('');

  const { handleSubmit, submitting } = props;

  const onSubmit = (value) => {
    props.editTicket(id, value, () => {
      props.history.push(`/tickets`);
    });
  };

  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'dwtc6zep7',
      uploadPreset: 'ogu2earf',
    },
    (error, result) => {
      if (result.event === 'success') {
        setImage(result.info.url);
        setPublicId(result.info.public_id);
      }
    }
  );
  const showWidget = () => {
    widget.open();
  };

  const deletePhoto = async () => {
    const imageDelete = {
      img: publicId,
    };
    props.deleteImage(imageDelete);
    setImage('');
  };
  const activities = [
    { title: '' },
    { title: 'Concerts' },
    { title: 'Sports' },
    { title: 'Arts & Theater' },
  ];

  return (
    <WrapperCard>
      <h4>
        Edit Ticket <i className="fas fa-ticket-alt"></i>
      </h4>
      <p>* Leave blank if doesn't want to change</p>
      <div className=" justify-content-center align-items-center">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              name="title"
              type="text"
              component={renderField}
              label="Title"
            />
            <Field
              name="price"
              type="number"
              component={renderField}
              label="Price"
            />
            <Field
              name="seat"
              type="text"
              component={renderField}
              label="Seat"
            />
            <div className="d-flex align-items-start">
              <Field
                name="date"
                type="date"
                component={renderField}
                label="Date"
              />
              <Field
                name="time"
                type="time"
                component={renderField}
                label="Hours"
              />
            </div>
            <Field
              name="activities"
              component={renderSelectField}
              label="Activities"
            >
              {activities.map((option) => (
                <option key={option.title} value={option.title}>
                  {option.title}
                </option>
              ))}
            </Field>
            <Field
              name="address"
              type="text"
              component={renderField}
              label="Address"
            />
            <Widget
              showWidget={showWidget}
              deletePhoto={deletePhoto}
              image={image}
            />
            <div>
              <div className="form-group">
                {error ? <span className="text-danger">{error}</span> : ''}
              </div>
              <button
                className="btn btn-primary shadow rounded btn-website"
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </WrapperCard>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'EditTicketForm' })
)(EditTicket);
