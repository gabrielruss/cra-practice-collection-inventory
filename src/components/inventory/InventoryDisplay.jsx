import React from 'react';
import { Table } from 'semantic-ui-react';

const makeRow = (game) => {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>{game.name}</Table.Cell>
        <Table.Cell>{game.description}</Table.Cell>
        <Table.Cell>{game.console}</Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

const InventoryDisplay = (props) => {
  const myProps = props.props[0];
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Console</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {makeRow(myProps)}
    </Table>
  );
};

export default InventoryDisplay;