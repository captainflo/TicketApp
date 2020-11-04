import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, EDIT_USER } from './types';

// Signup
export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/signup`,
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    dispatch({ type: AUTH_ERROR, payload: '' });
    localStorage.setItem('token', response.data.token);
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Signin
export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/signin`,
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data });
    dispatch({ type: AUTH_ERROR, payload: '' });
    localStorage.setItem('token', response.data.token);
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

// Signout
export const signout = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: AUTH_USER, payload: '' });
};

// Fetch
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3001/api/current_user');
  dispatch({ type: AUTH_USER, payload: res.data });
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

// Edit delete
export const deleteUser = (id, callback) => async (dispatch) => {
  await axios.delete(`/api/user/${id}`);
  dispatch({ type: EDIT_USER, payload: '' });
  localStorage.removeItem('token');
  callback(); /* history callback */
};
