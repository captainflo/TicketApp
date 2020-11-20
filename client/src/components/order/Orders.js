import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Carousel from '../utils/carousel/Carousel';
import Loading from '../utils/Loading';
import TicketCard from '../utils/ticketCard/TicketCard';

const Orders = (props) => {
  const orders = useSelector((state) => state.order.orders);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      props.fetchOrdersByUserId(user._id);
    }
  }, [props.fetchOrdersByUserId, user]);

  const elements = [
    {
      text: 'Check your list',
      photo: 'order.jpeg',
      title: 'Be prepare for the next step',
    },
  ];
  if (!orders) {
    return <Loading />;
  } else if (orders.length === 0) {
    return (
      <div>
        <Carousel elements={elements} /> No Orders
      </div>
    );
  }

  console.log(orders);
  const displayOrders = orders.map((order) => {
    return <TicketCard key={order.ticket._id} ticket={order.ticket} />;
  });

  return (
    <div>
      <Carousel elements={elements} />
      <div className="container-fluid">
        <h4 className="my-4 ">List all Orders</h4>
        <div className="row">
          <div className="col-md-8">{displayOrders}</div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(Orders);
