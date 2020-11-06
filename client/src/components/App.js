import React, { useEffect } from 'react';
import Header from './utils/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as actions from './actions';

import Signout from './auth/Signout';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Welcome from './pages/Welcome';
import UserShow from './user/UserShow';
import UserEdit from './user/UserEdit';

const App = (props) => {
  const user = useSelector((state) => state.auth.user);
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    if (authenticated) {
      props.fetchUser();
    }
  }, [authenticated, props]);

  return (
    <div>
      <BrowserRouter>
        <Header currentUser={user} />
        <Route exact path="/" component={Welcome} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        {authenticated ? (
          <div>
            <Route exact path="/user/:id" component={UserShow} />
            <Route exact path="/user/edit/:id" component={UserEdit} />
          </div>
        ) : (
          ''
        )}
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
