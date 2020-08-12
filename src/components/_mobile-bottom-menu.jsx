import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAirFreshener, faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const mobileMenu = [
  {
    name: 'Home',
    icon: faCoffee,
    href: '/',
  },
  {
    name: 'About',
    icon: faAirFreshener,
    href: '/about',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      clicked: false,
    };
  }

  handleClick(idx, props) {
    window.scrollTo(0, 0);
    this.setState({ activeIndex: idx });
  }

  render() {
    return (
      <div className="mobile-bottom-menu">
        <ul className="mobile-menu">
          {mobileMenu.map((item, idx) => {
            const cssName = this.state.activeIndex === idx ? 'mobile-menu-item active' : 'mobile-menu-item';
            return (
              <li className={cssName}>
                <Link to={item.href} className="mobile-menu-link" onClick={this.handleClick.bind(this, idx, this.props)}>
                  {item.name}
                  <FontAwesomeIcon icon={item.icon} className="ml-1" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
