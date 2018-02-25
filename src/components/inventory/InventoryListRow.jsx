import React from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

function getConsoleName(consoleId, gameConsoles) {
  let consoleName = gameConsoles
    .filter(gameConsole => {
      return consoleId === gameConsole.id;
    })
    .map(filteredConsole => {
      return filteredConsole.name;
    });
  return consoleName;
}

const InventoryListRow = ({ game, gameConsoles }) => {
  let consoleName = "";
  if (gameConsoles.length) {
    consoleName = getConsoleName(game.consoleId, gameConsoles);
  }
  return (
    <Table.Row>
      <Table.Cell>
        <Link to={`/game/${game.id}`}>{game.name}</Link>
      </Table.Cell>
      <Table.Cell>{game.description}</Table.Cell>
      <Table.Cell>{consoleName}</Table.Cell>
    </Table.Row>
  );
};

export default InventoryListRow;
