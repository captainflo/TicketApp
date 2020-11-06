import { useSelector } from 'react-redux';
import Card from '../utils/userCard/Card';
import Loading from '../utils/Loading';

const UserShow = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card user={user} />
    </div>
  );
};

export default UserShow;
