import './ticketCardShow.css';
import moment from 'moment';

const TicketCardShow = ({ ticket }) => {
  return (
    <div className="ticket-show-wrapper">
      <img className="ticket-show-img" src={ticket.photo} alt="ticket-photo" />
      <div className="ticket-show-body"></div>
      <div class="card-body">
        <h4>{ticket.title}</h4>
        <p>{ticket.price}</p>
        <p>{moment.utc(ticket.date).format('MMMM D')}</p>
        <p>{ticket.address}</p>
      </div>
      <div class="ticket-show-footer">
        <button className="btn btn-primary">Payment</button>
      </div>
    </div>
  );
};

export default TicketCardShow;
