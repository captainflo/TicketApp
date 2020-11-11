import React, { useState } from 'react';
import renderField from './form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import Widget from '../utils/cloudinary/Widget';
import validate from './form/validation';
import WrapperCard from '../utils/wrapperCard/WrapperCard';

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

  return (
    <WrapperCard>
      <h4>
        Create Ticket <i className="fas fa-ticket-alt"></i>
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
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'NewTicketForm', validate })
)(NewTicket);
