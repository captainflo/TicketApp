import './marketing.css';
const Marketing = () => {
  return (
    <div className="container-fluid marketing">
      <div className="row">
        <div className="col-md-6">
          <div className="block-text-marketing">
            <div>
              <h4>Reserve your ticket</h4>
              <p>Buy or sell with confidence at TicketApp</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + `/images/mockup.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
