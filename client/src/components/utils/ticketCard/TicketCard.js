import './ticketCard.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const TicketCard = ({ price, title, address, photo, date, id }) => {
  return (
    <div className="ticket-card-wrapper ">
      <div className="head-wrapper">
        <div className="ticket-image-wrapper">
          <img src={photo} className="ticket-image" />
        </div>
        <div className="ticket-date-wrapper">
          <p>{moment.utc(date).format('MMM D')}</p>
        </div>
      </div>

      <div className="ticket-description-wrapper">
        <p>{title}</p>
        <span>{address}</span>
      </div>
      <p>$ {price}</p>
      <div>
        <Link to={`/ticket/${id}`} className="btn btn-primary">
          See Ticket
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
