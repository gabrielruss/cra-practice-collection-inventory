import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const InventoryListRow = ({ game }) => {
  return (
    <Table.Row>
      <Table.Cell><Link to={`/game/${game.id}`}>{game.name}</Link></Table.Cell>
      <Table.Cell>{game.description}</Table.Cell>
      <Table.Cell>{game.console}</Table.Cell>
    </Table.Row>
  );
};

export default InventoryListRow;