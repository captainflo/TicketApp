import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Carousel from '../utils/carousel/Carousel';
import Loading from '../utils/Loading';
import TicketCard from '../utils/ticketCard/TicketCard';
import SearchActivities from './search/SearchActivities';
const _ = require('lodash');

const Tickets = (props) => {
  const tickets = useSelector((state) => state.ticket.tickets);
  const [activities, setActivities] = useState('All');

  useEffect(() => {
    props.getAllTickets();
  }, [props.getAllTickets]);

  if (!tickets) {
    return <Loading />;
  }
  const displayTickets = _.orderBy(
    tickets,
    ['date', 'time'],
    ['asc', 'asc']
  ).map((ticket) => {
    return <TicketCard key={ticket._id} ticket={ticket} />;
  });

  const displayActivities = _.filter(tickets, {
    activities: activities,
  }).map((ticket) => {
    return <TicketCard key={ticket._id} ticket={ticket} />;
  });

  const onSubmit = (value) => {
    setActivities(value.activities);
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
        <h4 className="my-4 ">Tickets List</h4>
        <SearchActivities onSubmit={onSubmit} />
        <div className="row">
          {activities === 'All' ? (
            <div className="col-md-8">{displayTickets}</div>
          ) : (
            <div className="col-md-8">{displayActivities}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(Tickets);
