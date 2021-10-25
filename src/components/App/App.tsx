import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../Navbar';
import Home from '../routes/Home';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import classes from './App.module.scss';

const App: FC = () => (
  <Router>
    <Navbar />
    <div className={classes.wrapper}>
      <Switch>
        <Route exact path="/e2e-tests" component={Home} />
        <Route exact path="/e2e-tests/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
