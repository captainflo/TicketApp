import React from 'react';
import Welcome from './components/pages/Welcome';
import Header from './components/utils/Header';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Welcome} />
      </BrowserRouter>
    </div>
  );
};

export default App;
