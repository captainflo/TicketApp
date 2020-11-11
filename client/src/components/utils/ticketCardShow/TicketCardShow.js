import './ticketCardShow.css';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TicketCardShow = ({ ticket }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="ticket-show-wrapper">
      <div className="ticket-show-wrapper-img">
        <img className="ticket-show-img" src={ticket.photo} alt="ticket" />
      </div>
      <div className="ticket-show-body"></div>
      <div className="card-body">
        <h4>{ticket.title}</h4>
        <p>
          <i className="far fa-calendar-alt"></i>{' '}
          {moment.utc(ticket.date).format('MMMM D')}
        </p>
        <p>
          <i className="fas fa-map-pin"></i> {ticket.address}
        </p>
        <p>
          <i className="fas fa-dollar-sign"></i> {ticket.price}
        </p>
      </div>
      <div className="ticket-show-footer">
        {user && user._id === ticket.userId ? (
          <div>
            <Link className="btn btn-info" to={`/ticket/edit/${ticket._id}`}>
              Edit <i className="far fa-edit"></i>
            </Link>
          </div>
        ) : (
          <button className="btn btn-primary">Payment</button>
        )}
      </div>
    </div>
  );
};

export default TicketCardShow;
