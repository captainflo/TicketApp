import { useEffect, useState } from 'react';
import * as actions from '../actions';
import { connect, useSelector } from 'react-redux';
import TicketCardShow from '../utils/ticketCardShow/TicketCardShow';
import Loading from '../utils/Loading';

const ShowTicket = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const ticket = useSelector((state) => state.ticket.showTicket);

  useEffect(() => {
    setIsLoading(true);
    props.fetchTicket(props.match.params.id, () => setIsLoading(false));
  }, [props]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <TicketCardShow ticket={ticket} />
    </div>
  );
};

export default connect(null, actions)(ShowTicket);
