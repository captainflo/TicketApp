import Carousel from '../utils/carousel/Carousel';

const Welcome = () => {
  const elements = [
    {
      text: 'We provides services for buyers and sellers of tickets',
      photo: 'wicked.jpeg',
      title: 'Get the best deal now!',
    },
    {
      text: 'Buy it or sell it',
      photo: 'connect.jpeg',
      title: 'The platform of ticket',
    },
  ];
  return (
    <div>
      <Carousel elements={elements} />
    </div>
  );
};

export default Welcome;
