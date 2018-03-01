import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "home"
    };
  }

  _handleClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item
          exact
          as={NavLink}
          to="/"
          name="home"
          content="Home"
          active={activeItem === "home"}
          onClick={this._handleClick}
        />
        <Menu.Item
          as={NavLink}
          to="/inventory"
          name="inventory"
          content="Inventory"
          active={activeItem === "inventory"}
          onClick={this._handleClick}
        />
        <Menu.Item
          as={NavLink}
          to="/about"
          name="about"
          content="About"
          active={activeItem === "about"}
          onClick={this._handleClick}
        />
      </Menu>
    );
  }
}

export default Header;
