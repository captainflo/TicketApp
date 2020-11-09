import { combineReducers } from 'redux';
import auth from './auth';
import { reducer as formReducer } from 'redux-form';
import ticket from './ticket';

export default combineReducers({
  auth: auth,
  ticket: ticket,
  form: formReducer,
});
