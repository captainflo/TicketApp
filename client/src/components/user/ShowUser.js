import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Card from '../utils/userCard/Card';
import Loading from '../utils/Loading';
import TicketCard from '../utils/ticketCard/TicketCard';

const ShowUser = (props) => {
  const user = useSelector((state) => state.auth.user);
  const tickets = useSelector((state) => state.ticket.tickets);

  useEffect(() => {
    props.getAllTickets();
  }, [props.getAllTickets]);

  if (!user || !tickets) {
    return <Loading />;
  }
  const displayTickets = tickets
    .filter((ticket) => ticket.userId === user._id)
    .map((ticket) => {
      return <TicketCard key={ticket._id} ticket={ticket} />;
    });

  const displayPriceTicket = (tickets) => {
    let totalPrice = 0;
    const allticket = tickets.filter(
      (ticket) => ticket.userId === user._id && ticket.orderId
    );
    allticket.forEach((ticket) => {
      totalPrice += ticket.price;
    });
    return totalPrice;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <Card user={user} />
        </div>
        <div className="col-md-7 col-sm-12">
          <div className="wrapper-all-ticket">
            <h2>All Your tickets</h2>
            {displayTickets}
            <h2>
              Total Sell{' '}
              <span className="float-right">
                ${displayPriceTicket(tickets)}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(ShowUser);
