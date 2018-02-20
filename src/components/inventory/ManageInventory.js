import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as inventoryActions from '../../actions/inventoryActions';
import { Grid, Header, Form } from 'semantic-ui-react'
import InventoryDisplay from './InventoryDisplay';
import '../../styles/App.css';

const emptyForm = {
  name: '',
  description: '',
  console: ''
};

class ManageInventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: {
        name: "",
        description: "",
        console: ""
      }
    };
  }

  _handleSubmit = () => {
    // const inventory = [...this.state.inventory, Object.assign({}, this.state.entry)];

    this.props.actions.createEntry(this.state.entry);

    this.setState({
      entry: emptyForm
    });
  }

  _handleInput = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    const entry = Object.assign({}, this.state.entry, { [name]: value });

    this.setState({
      entry
    });
  }

  render() {
    const { name, description, console } = this.state.entry;
    const { inventory } = this.props;
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
              <Form.Button content="Submit" onClick={this._handleSubmit} />
            </Form.Group>

          </Grid.Column>
          <Grid.Column width={10} className="nice-border">
            <InventoryDisplay inventory={inventory} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {  
    inventory: state.inventory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(inventoryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInventory);