import React from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import InventoryDisplay from './InventoryDisplay';
import '../../styles/App.css';

class ManageInventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [{
        key: '1',
        name: "The Legend of Zelda",
        description: "The Legend of Zelda is the first installment of the Zelda series.",
        console: "NES"
      }]
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={8} className="nice-border">
            <h1>Input</h1>
            <Input placeholder="Name" />
            <Input placeholder="Description" />
            <Input placeholder="Console" />
          </Col>
          <Col span={16} className="nice-border"><InventoryDisplay props={this.state.inventory} /></Col>
        </Row>
      </div>
    )
  }
}

export default ManageInventory;