import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';

import Home from './home/';
import About from './about/';
import Product from './product';

const NotFound = () => <h2>NotFound</h2>;

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        {/*<Route path="/payments" component={Payments} />*/}
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
