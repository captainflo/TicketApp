import './ticketCard.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card-wrapper ">
      <div className="head-wrapper">
        <div className="ticket-image-wrapper">
          <img src={ticket.photo} className="ticket-image" alt="ticket" />
        </div>
        <div className="ticket-date-wrapper">
          <p>{moment.utc(ticket.date).format('MMM D')}</p>
          <p>{moment(ticket.time, 'HH:mm').format('hh:mm a')}</p>
        </div>
      </div>

      <div className="ticket-description-wrapper">
        <p>{ticket.title}</p>
        <span>{ticket.address}</span>
      </div>
      <p>$ {ticket.price}</p>
      {!ticket.orderId ? (
        <div className="ticket-button">
          <Link to={`/ticket/${ticket._id}`} className="btn btn-primary">
            See Ticket
          </Link>
        </div>
      ) : (
        <div className="ticket-button">
          <p className="text-danger">Sold Out</p>
        </div>
      )}
    </div>
  );
};

export default TicketCard;
