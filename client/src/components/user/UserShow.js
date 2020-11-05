import { authenticate } from 'passport';
import { useDispatch, useSelector } from 'react-redux';

const UserShow = (props) => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  console.log(authenticated);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);
  return <div>hello user</div>;
};

export default UserShow;
