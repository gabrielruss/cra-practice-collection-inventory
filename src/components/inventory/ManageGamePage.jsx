import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as inventoryActions from "../../actions/inventoryActions";
import { withRouter } from "react-router-dom";
import GameForm from "./GameForm";
import toastr from "toastr";

class ManageGamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game),
      saving: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.game.id !== nextProps.game.id) {
      this.setState({
        game: Object.assign({}, nextProps.game)
      });
    }
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
    this.setState({
      saving: true
    });
    this.props.actions
      .saveToInventory(this.state.game)
      .then(() => {
        this.redirect();
      })
      .catch(error => {
        toastr.error(error);
        this.setState({
          saving: false
        });
      });
  };

  redirect() {
    this.props.history.push("/inventory");
    toastr.success("Game saved");
    this.setState({
      saving: false
    });
  }

  render() {
    return (
      <GameForm
        game={this.state.game}
        gameConsoles={this.props.gameConsoles}
        onChange={this.updateGameState}
        onSave={this.onSave}
        saving={this.state.saving}
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

function getGameById(inventory, id) {
  const game = inventory.filter(game => game.id === id);
  return game.length ? game[0] : null;
}

function mapStateToProps(state, ownProps) {
  const gameId = ownProps.match.params.id;

  let game = { id: "", name: "", description: "", consoleId: "" };

  if (gameId && state.inventory.length) {
    game = getGameById(state.inventory, gameId);
  }

  const gameConsolesFormattedForDropdown = state.gameConsoles.map(
    gameConsole => {
      return {
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
