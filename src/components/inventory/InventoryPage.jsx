import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as inventoryActions from "../../actions/inventoryActions";
import { Grid, Header, Button, Dimmer, Loader } from "semantic-ui-react";
import InventoryList from "./InventoryList";
import { Link } from "react-router-dom";
import "../../styles/App.css";

class ManageInventory extends React.Component {
  render() {
    const { inventory, gameConsoles, loading } = this.props;
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
            <Dimmer active={loading}>
              <Loader size="big">Loading</Loader>
            </Dimmer>
            <InventoryList inventory={inventory} gameConsoles={gameConsoles} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ManageInventory.propTypes = {
  inventory: PropTypes.array.isRequired,
  gameConsoles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    inventory: state.inventory,
    gameConsoles: state.gameConsoles,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(inventoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInventory);
