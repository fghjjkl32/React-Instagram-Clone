import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginWoo from './Pages/geonwoojeon/Login/Login';
import MainWoo from './Pages/geonwoojeon/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginWoo} />
          <Route exact path="/mainwoo" component={MainWoo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
