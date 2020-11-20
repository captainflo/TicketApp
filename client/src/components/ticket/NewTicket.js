import React, { useState } from 'react';
import renderField from './form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import Widget from '../utils/cloudinary/Widget';
import validate from './form/validation';
import WrapperCard from '../utils/wrapperCard/WrapperCard';
import renderSelectField from './form/renderSelectField';
import Carousel from '../utils/carousel/Carousel';

const NewTicket = (props) => {
  const error = useSelector((state) => state.auth.errorMessage);
  const user = useSelector((state) => state.auth.user);

  const [image, setImage] = useState('');
  const [publicId, setPublicId] = useState('');

  const { handleSubmit, submitting } = props;

  const onSubmit = (value) => {
    const form = {
      title: value.title,
      price: value.price,
      activities: value.activities,
      userId: user._id,
      date: value.date,
      address: value.address,
      photo: image,
    };
    props.createTicket(form, () => {
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

  const elements = [
    {
      text: 'Sell your tickets now',
      photo: 'sell.jpeg',
      title: 'Plans Changed?',
    },
  ];
  return (
    <div>
      <Carousel elements={elements} />
      <WrapperCard>
        <h4 className="my-4 text-center">
          Create your Ticket <i className="fas fa-ticket-alt"></i>
        </h4>
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
                name="date"
                type="date"
                component={renderField}
                label="Date"
              />
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
                  className="btn btn-primary shadow rounded"
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
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'NewTicketForm', validate })
)(NewTicket);
