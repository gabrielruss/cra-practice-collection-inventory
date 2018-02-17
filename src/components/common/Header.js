import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'home'
    };
  }

  _handleClick = (e) => {
    this.setState({
      current: e.key
    });
  }

  render() {
    return (
      <Menu
      onClick={this._handleClick}
      mode="horizontal"
      selectedKeys={[this.state.current]}>
      
        <Menu.Item key="home">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="about">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;