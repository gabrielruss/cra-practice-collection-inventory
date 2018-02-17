import React from 'react';
import { Table } from 'antd';

const InventoryDisplay = (props) => {
  const myProps = props.props;

  const columns = [{
    title: "Name",
    dataIndex: "name",
    key: "name"
  }, {
    title: "Description",
    dataIndex: "description",
    key: "description"
  }, {
    title: "Console",
    dataIndex: "console",
    key: "console"
  }];

  return (
    <Table columns={columns} dataSource={myProps} />
  );
};

export default InventoryDisplay;