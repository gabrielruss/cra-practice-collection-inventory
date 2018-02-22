import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as inventoryActions from "../../actions/inventoryActions";
import GameForm from "./GameForm";

class ManageGamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game)
    };
  }

  render() {
    return (
      <GameForm game={this.state.game} gameConsoles={this.props.gameConsoles} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  let game = { id: "", name: "", description: "", gameConsole: "" };
  const gameConsolesFormattedForDropdown = state.gameConsoles.map(
    gameConsole => {
      return {
        key: gameConsole.key,
        value: gameConsole.name
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);
