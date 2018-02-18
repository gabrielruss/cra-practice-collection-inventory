import React from 'react';
import { Grid, Header, Form } from 'semantic-ui-react'
import InventoryDisplay from './InventoryDisplay';
import '../../styles/App.css';

const initialState = [{
  key: '1',
  name: "The Legend of Zelda",
  description: "The Legend of Zelda is the first installment of the Zelda series.",
  console: "NES"
}, {
  key: '2',
  name: "Zelda II",
  description: "Zelda II is a hard game...but fun as well.",
  console: "NES"
}];

class ManageInventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: initialState
    };
  }

  _handleSave = () => {
    console.log(`Saving ${this.state.inventory[0].name}`);
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={6} className="nice-border">
            <Header as="h1">Input</Header>
            <Form.Group>
              <Form.Input fluid label='Name' placeholder='Name' className="input-style"/>
              <Form.Input fluid label='Description' placeholder='Description' className="input-style"/>
              <Form.Input fluid label='Console' placeholder='Console' className="input-style"/>
              <Form.Button>Submit</Form.Button>
            </Form.Group>
          </Grid.Column>
          <Grid.Column width={10} className="nice-border">
            <InventoryDisplay inventory={this.state.inventory} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ManageInventory;