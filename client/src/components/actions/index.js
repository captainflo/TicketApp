import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  EDIT_USER,
  FETCH_USER,
  TICKETS,
  TICKET,
  TICKET_ERROR,
  ORDERS,
  ORDER_ERROR,
} from './types';

//////////////////////////////// Authentification //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Signup
export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`/signup`, formProps);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    dispatch({ type: AUTH_ERROR, payload: '' });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Signin
export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`/signin`, formProps);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    dispatch({ type: AUTH_ERROR, payload: '' });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

// Signout
export const signout = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: AUTH_USER, payload: '' });
  dispatch({ type: ORDERS, payload: '' });
  dispatch({ type: TICKETS, payload: '' });
  dispatch({ type: TICKET, payload: '' });
  dispatch({ type: FETCH_USER, payload: '' });
};

// fetch User
export const fetchUser = () => async (dispatch) => {
  const token = { token: localStorage.token };
  const res = await axios
    .post('/api/user', token)
    .then(
      async (response) => await axios.get(`/api/user/${response.data.sub}`)
    );
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Edit User
export const editUser = (id, formValues, callback) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_ERROR, payload: '' });
    const response = await axios.post(`/api/user/${id}`, formValues);
    dispatch({ type: EDIT_USER, payload: response.data });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Delete User
export const deleteUser = (id, callback) => async (dispatch) => {
  await axios.delete(`/api/user/${id}`);
  dispatch({ type: EDIT_USER, payload: '' });
  localStorage.removeItem('token');
  callback(); /* history callback */
};

////////////////////////////////////////// Cloudinary ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// Cloudinary Delete Image
export const deleteImage = (image) => async () => {
  await axios.post(`/api/delete/image`, image);
};

////////////////////////////////////////// Tickets //////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// fetch All Tickets
export const getAllTickets = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/tickets');
    dispatch({ type: TICKETS, payload: response.data });
  } catch (e) {
    dispatch({ type: TICKET_ERROR, payload: 'No tickets found...' });
  }
};

// Create Ticket
export const createTicket = (ticket, callback) => async (dispatch) => {
  try {
    await axios.post('/api/ticket/new', ticket);
    callback();
  } catch (e) {
    dispatch({ type: TICKET_ERROR, payload: 'can not create ticket' });
  }
};

// fetch Ticket
export const fetchTicket = (id, callback) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/ticket/${id}`);
    dispatch({ type: TICKET, payload: response.data });
    callback();
  } catch (e) {
    dispatch({ type: TICKET_ERROR, payload: 'can not create ticket' });
  }
};

// edit Ticket
export const editTicket = (id, value, callback) => async (dispatch) => {
  try {
    await axios.post(`/api/ticket/${id}`, value);
    callback();
  } catch (e) {
    dispatch({ type: TICKET_ERROR, payload: 'can edit ticket' });
  }
};

//////////////////////////////// Orders ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create New Order
export const createOrder = (value, callback) => async (dispatch) => {
  try {
    await axios.post(`/api/order/new`, value);
    callback();
  } catch (e) {
    dispatch({ type: ORDER_ERROR, payload: 'can create order' });
  }
};

// Fetch Order by userId
export const fetchOrdersByUserId = (userId) => async (dispatch) => {
  const id = { userId };
  try {
    const response = await axios.post('/api/orders', id);
    dispatch({ type: ORDERS, payload: response.data });
  } catch (e) {
    dispatch({ type: ORDER_ERROR, payload: 'cannot find Order...' });
  }
};
