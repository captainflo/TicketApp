import './ticketCard.css';

const TicketCard = ({ price, title }) => {
  return (
    <div className="ticket-card-wrapper ">
      <div className="ticket-image-wrapper">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-heart-with-headphones-on-blue-background-royalty-free-image-1575655505.jpg"
          className="ticket-image"
        />
      </div>
      <div className="ticket-date-wrapper">
        <p>Nov 13-14 </p>
      </div>
      <div className="ticket-description-wrapper">
        <p>{title}</p>
        <span>Lauderdale Beach Park Ft. Lauderdale,</span>
      </div>
      <p>$ {price}</p>
      <div>
        <button className="btn btn-primary">See Ticket</button>
      </div>
    </div>
  );
};

export default TicketCard;
