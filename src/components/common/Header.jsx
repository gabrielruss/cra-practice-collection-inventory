import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

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
          active={activeItem === "home"}
          onClick={this._handleClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/inventory"
          name="inventory"
          active={activeItem === "inventory"}
          onClick={this._handleClick}
        >
          Inventory
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/about"
          name="about"
          active={activeItem === "about"}
          onClick={this._handleClick}
        >
          About
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown item icon="sidebar">
            <Dropdown.Menu>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
