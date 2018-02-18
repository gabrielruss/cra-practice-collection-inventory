import React from 'react';
import { Table } from 'semantic-ui-react';

const makeRow = (game, index) => {
  return (
    <Table.Row key={index}>
      <Table.Cell>{game.name}</Table.Cell>
      <Table.Cell>{game.description}</Table.Cell>
      <Table.Cell>{game.console}</Table.Cell>
    </Table.Row>
  );
};

const InventoryDisplay = ({ inventory }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Console</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body >
        {inventory.map(makeRow)}
      </Table.Body>
    </Table>
  );
};

export default InventoryDisplay;