import { combineReducers } from 'redux';
import auth from './auth';
import { reducer as formReducer } from 'redux-form';
import ticket from './ticket';
import order from './order';

export default combineReducers({
  auth: auth,
  order: order,
  ticket: ticket,
  form: formReducer,
});
