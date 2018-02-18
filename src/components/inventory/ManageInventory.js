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

const emptyForm = {
  name: '',
  description: '',
  console: ''
};

class ManageInventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: initialState,
      formValues: {
        name: "",
        description: "",
        console: ""
      }
    };
  }

  _handleSubmit = () => {
    const inventory = [...this.state.inventory, Object.assign({}, this.state.formValues)];

    this.setState({
      inventory,
      formValues: emptyForm
    });
  }

  _handleInput = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    const formValues = Object.assign({}, this.state.formValues, { [name]: value });

    this.setState({
      formValues
    });
  }

  render() {
    const { name, description, console } = this.state.formValues;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={6} className="nice-border">
            <Header as="h1">Input</Header>
            
              <Form.Group>
                <Form.Input fluid
                  label='Name'
                  name='name'
                  value={name}
                  placeholder='Name'
                  className="input-style"
                  onChange={this._handleInput} />
                <Form.Input fluid
                  label='Description'
                  name='description'
                  value={description}
                  placeholder='Description'
                  className="input-style"
                  onChange={this._handleInput} />
                <Form.Input fluid
                  label='Console'
                  name='console'
                  value={console}
                  placeholder='Console'
                  className="input-style"
                  onChange={this._handleInput} />
                <Form.Button content="Submit" onClick={this._handleSubmit}/>
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