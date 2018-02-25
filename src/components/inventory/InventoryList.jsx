import React from "react";
import { Table } from "semantic-ui-react";
import InventoryListRow from "./InventoryListRow";

const InventoryList = ({ inventory, gameConsoles }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Console</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {inventory.map(game => <InventoryListRow key={game.id} game={game} gameConsoles={gameConsoles} />)}
      </Table.Body>
    </Table>
  );
};

export default InventoryList;
