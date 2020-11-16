import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Loading from '../utils/Loading';
import TicketCard from '../utils/ticketCard/TicketCard';

const Tickets = (props) => {
  const tickets = useSelector((state) => state.ticket.tickets);
  useEffect(() => {
    props.getAllTickets();
  }, [props]);

  if (!tickets) {
    return <Loading />;
  }
  const displayTickets = tickets.map((ticket) => {
    return <TicketCard key={ticket._id} ticket={ticket} />;
  });

  return (
    <div className="container-fluid">
      <h4>List all tickets</h4>
      <div className="row">
        <div className="col-md-8">{displayTickets}</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(Tickets);
