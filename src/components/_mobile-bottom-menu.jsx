import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAirFreshener, faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const mobileMenu = [
  {
    name: 'Menu Item 1',
    icon: faCoffee,
  },
  {
    name: 'Menu Item 2',
    icon: faAirFreshener,
  },
  {
    name: 'Menu Item 3',
    icon: faAlignCenter,
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
    this.setState({ activeIndex: idx });
  }

  render() {
    return (
      <Fragment>
        <div className="mobile-bottom-menu">
          <ul className="mobile-menu">
            {mobileMenu.map((item, idx) => {
              const cssName = this.state.activeIndex === idx ? 'mobile-menu-item active' : 'mobile-menu-item';
              return (
                <li className={cssName}>
                  <a className="mobile-menu-link" onClick={this.handleClick.bind(this, idx, this.props)}>
                    {item.name}
                    <FontAwesomeIcon icon={item.icon} className="ml-1" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}
