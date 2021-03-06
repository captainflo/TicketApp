import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Carousel from '../utils/carousel/Carousel';
import Loading from '../utils/Loading';
import TicketCard from '../utils/ticketCard/TicketCard';
import SearchActivities from './search/SearchActivities';
import moment from 'moment';

const _ = require('lodash');

const Tickets = (props) => {
  const tickets = useSelector((state) => state.ticket.tickets);
  const [activities, setActivities] = useState('All');
  const [dateSelected, setDateSelected] = useState(
    moment().format('YYYY-MM-DD')
  );

  useEffect(() => {
    props.getAllTickets();
  }, [props, props.getAllTickets]);

  if (!tickets) {
    return <Loading />;
  }

  const displayTickets = _.orderBy(tickets, ['date', 'time'], ['asc', 'asc'])
    .filter(
      (ticket) =>
        !ticket.orderId &&
        moment.utc(ticket.date).format('YYYY-DD-MM') >=
          moment.utc(dateSelected).format('YYYY-DD-MM')
    )
    .map((ticket) => {
      return <TicketCard key={ticket._id} ticket={ticket} />;
    });

  const displayActivities = _.orderBy(tickets, ['date', 'time'], ['asc', 'asc'])
    .filter(
      (ticket) =>
        !ticket.orderId &&
        ticket.activities === activities &&
        moment.utc(ticket.date).format('YYYY-DD-MM') >=
          moment.utc(dateSelected).format('YYYY-DD-MM')
    )
    .map((ticket) => {
      return <TicketCard key={ticket._id} ticket={ticket} />;
    });

  const onSubmit = (value) => {
    setActivities(value.activities);
    setDateSelected(value.date);
  };

  const elements = [
    {
      text: "Don't Miss Out",
      photo: 'ticket.jpg',
      title: 'Life Happens Fast,',
    },
  ];
  return (
    <div>
      <Carousel elements={elements} />
      <div className="container-fluid">
        <SearchActivities onSubmit={onSubmit} />
        <div className="row">
          {activities === 'All' ? (
            <div className="col-md-8">
              <h4 className="my-4 ">We Found {displayTickets.length} events</h4>
              {displayTickets}
            </div>
          ) : (
            <div className="col-md-8">
              <h4 className="my-4 ">
                We Found {displayActivities.length} events
              </h4>
              {displayActivities}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(Tickets);
