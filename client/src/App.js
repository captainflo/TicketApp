import React, { useEffect } from 'react';
import Welcome from './components/pages/Welcome';
import Header from './components/utils/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from './components/actions';
import { connect } from 'react-redux';

import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import NewTicket from './components/ticket/New';

const App = ({ authenticated }) => {
  useEffect(() => {
    actions.fetchUser();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header currentUser={authenticated} />
        <Route exact path="/" component={Welcome} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        {authenticated ? (
          <div>
            <Route path="/tickets/new" component={NewTicket} />
          </div>
        ) : (
          ''
        )}
      </BrowserRouter>
    </div>
  );
};

function mapStateToPros(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToPros, actions)(App);
