import React from 'react';
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
        Home
        </Menu.Item>
        <Menu.Item key="about">
        About
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;