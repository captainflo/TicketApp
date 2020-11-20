import Carousel from '../utils/carousel/Carousel';
import Concept from '../utils/concept/Concept';
import Marketing from '../utils/concept/marketing';
import Partner from '../utils/concept/Partner';

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

  const partner = [
    { photo: 'miami.jpeg' },
    { photo: 'arsht.png' },
    { photo: 'dolphin-logo.png' },
    { photo: 'baseball.jpg' },
    { photo: 'Miami-Heat-logo.png' },
    { photo: 'inter.jpeg' },
    { photo: 'symphony.png' },
    { photo: 'aquarium-Logo.jpeg' },
  ];
  return (
    <div>
      <Carousel elements={elements} />
      <Marketing />
      <Concept />
      <Partner images={partner} />
    </div>
  );
};

export default Welcome;
