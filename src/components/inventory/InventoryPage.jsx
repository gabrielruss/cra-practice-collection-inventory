import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as inventoryActions from "../../actions/inventoryActions";
import { Grid, Header, Button } from "semantic-ui-react";
import InventoryList from "./InventoryList";
import { Link } from "react-router-dom";
import "../../styles/App.css";

class ManageInventory extends React.Component {
  render() {
    const { inventory, gameConsoles } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h1" content="Game Inventory" />
            <Button
              as={Link}
              to="/game"
              primary
              content="Add New Game"
              onClick={this.redirectToManageGamePage}
            />
            <InventoryList inventory={inventory} gameConsoles={gameConsoles}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    inventory: state.inventory,
    gameConsoles: state.gameConsoles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(inventoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInventory);
