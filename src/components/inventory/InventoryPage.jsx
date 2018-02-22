import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as inventoryActions from "../../actions/inventoryActions";
import { Grid } from "semantic-ui-react";
import InventoryList from "./InventoryList";
import "../../styles/App.css";

const emptyForm = {
  name: "",
  description: "",
  console: ""
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
  };

  _handleInput = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    const entry = Object.assign({}, this.state.entry, { [name]: value });

    this.setState({
      entry
    });
  };

  render() {
    const { inventory } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16} className="nice-border">
            <InventoryList inventory={inventory} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    inventory: state.inventory
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(inventoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInventory);
