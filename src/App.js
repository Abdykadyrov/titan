import * as React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import createHistory from './config/history';


export default () => (
  <Router history={createHistory()}>
    <Routes />
  </Router>
);