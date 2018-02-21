import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'home'
    };
  }

  _handleClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item exact as={NavLink} to="/" name="home" active={activeItem === "home"} onClick={this._handleClick}>
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} to="/inventory" name="inventory" active={activeItem === "inventory"} onClick={this._handleClick}>
          Inventory
        </Menu.Item>
        <Menu.Item as={NavLink} to="/about" name="about" active={activeItem === "about"} onClick={this._handleClick}>
          About
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;