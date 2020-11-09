import './wrapperCard.css';

const WrapperCard = (props) => {
  return (
    <div className="container wrapper-card shadow-sm p-3 mb-5 bg-white rounded">
      {props.children}
    </div>
  );
};

export default WrapperCard;
