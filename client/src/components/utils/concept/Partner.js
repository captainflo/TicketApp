import './partner.css';

const Partner = ({ images }) => {
  const partener = images.map((image) => {
    return (
      <div key={image.photo} className="col-md-3">
        <div className="wrapper-image-partner">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + `/images/${image.photo}`}
            alt="partener"
          />
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid partener-wrapper">
      <h4 className="text-center">Trusted by</h4>
      <div className="row">{partener}</div>
    </div>
  );
};

export default Partner;
