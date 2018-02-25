import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as inventoryActions from "../../actions/inventoryActions";
import { withRouter } from "react-router-dom";
import GameForm from "./GameForm";

class ManageGamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game)
    };
  }

  updateGameState = (e, data) => {
    const field = data.name;
    let game = Object.assign({}, this.state.game);
    game[field] = data.value;
    return this.setState({
      game
    });
  };

  onSave = () => {
    this.props.actions.saveToInventory(this.state.game);
    this.props.history.push("/inventory");
  };

  render() {
    return (
      <GameForm
        game={this.state.game}
        gameConsoles={this.props.gameConsoles}
        onChange={this.updateGameState}
        onSave={this.onSave}
      />
    );
  }
}

ManageGamePage.propTypes = {
  game: PropTypes.object.isRequired,
  gameConsoles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageGamePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let game = { id: "", name: "", description: "", consoleId: "" };
  const gameConsolesFormattedForDropdown = state.gameConsoles.map(
    gameConsole => {
      return {
        key: gameConsole.id,
        text: gameConsole.name,
        value: gameConsole.id
      };
    }
  );
  return {
    game: game,
    gameConsoles: gameConsolesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(inventoryActions, dispatch)
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ManageGamePage);
