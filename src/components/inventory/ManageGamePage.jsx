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

  updateGameState = (e, data) => {
    const field = data.name;
    let game = Object.assign({}, this.state.game);
    game[field] = data.value;
    return this.setState({
      game
    });
  };

  render() {
    return (
      <GameForm
        game={this.state.game}
        gameConsoles={this.props.gameConsoles}
        onChange={this.updateGameState}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);
