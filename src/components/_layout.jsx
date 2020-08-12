import React, { Component, Fragment } from 'react';
import MobileBottomMenu from './_mobile-bottom-menu.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './_about.jsx';
import Home from './_home.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MobileBottomMenu />

        <header className="header">App Header</header>

        <main className="body">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <footer className="footer">App Footer</footer>
      </Router>
    );
  }
}
