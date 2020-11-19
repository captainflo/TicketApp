import Carousel from '../utils/carousel/Carousel';
import Concept from '../utils/concept/Concept';
import Marketing from '../utils/concept/marketing';

const Welcome = () => {
  const elements = [
    {
      text: 'NOTHING BEATS NFL FOOTBALL',
      photo: 'dolphin.jpeg',
      title: 'GET READY FOR GAME TIME.',
    },
    {
      text: 'BUY TICKETS NOW!',
      photo: 'orchestra.jpg',
      title: 'THE LARGEST TICKET MARKETPLACE',
    },
    {
      text: 'CHECK YOUR ACCOUNT',
      photo: 'girl.jpeg',
      title: 'PLANS CHANGED? SELL YOUR TICKETS NOW',
    },
  ];
  return (
    <div>
      <Carousel elements={elements} />
      <Concept />
      <Marketing />
    </div>
  );
};

export default Welcome;
