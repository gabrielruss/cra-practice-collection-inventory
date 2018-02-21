import React from 'react';
import { Table } from 'semantic-ui-react';

const InventoryListRow = ({ game }) => {
  return (
    <Table.Row>
      <Table.Cell>{game.name}</Table.Cell>
      <Table.Cell>{game.description}</Table.Cell>
      <Table.Cell>{game.console}</Table.Cell>
    </Table.Row>
  );
};

export default InventoryListRow;