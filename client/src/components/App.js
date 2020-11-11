import React, { useEffect } from 'react';
import Header from './utils/Header';
import Footer from './utils/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as actions from './actions';

import Signout from './auth/Signout';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Welcome from './pages/Welcome';
import ShowUser from './user/ShowUser';
import EditUser from './user/EditUser';
import Tickets from './ticket/Tickets';
import NewTicket from './ticket/NewTicket';
import ShowTicket from './ticket/ShowTicket';
import EditTicket from './ticket/EditTicket';

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
        <div className="wrapper">
          <Route exact path="/" component={Welcome} />
          <Route path="/signout" component={Signout} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          {authenticated ? (
            <div>
              <Route exact path="/user/:id" component={ShowUser} />
              <Route exact path="/user/edit/:id" component={EditUser} />
              <Route exact path="/tickets" component={Tickets} />
              <Route exact path="/tickets/new" component={NewTicket} />
              <Route exact path="/ticket/:id" component={ShowTicket} />
              <Route exact path="/ticket/edit/:id" component={EditTicket} />
            </div>
          ) : (
            ''
          )}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
