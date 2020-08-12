import React, { Component, Fragment } from 'react';
import MobileBottomMenu from './_mobile-bottom-menu.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <MobileBottomMenu />
        <header className="header">App Header</header>
        <main className="body">
          <h1 className="title">Hello World!!</h1>
        </main>
        <footer className="footer">App Footer</footer>
      </Fragment>
    );
  }
}
