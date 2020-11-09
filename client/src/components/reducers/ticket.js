import { TICKET_ERROR, TICKETS } from '../actions/types';

const INITIAL_STATE = {
  tickets: '',
  errorMessage: '',
};

const ticket = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TICKETS:
      return { ...state, tickets: action.payload || false };
    case TICKET_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default ticket;
