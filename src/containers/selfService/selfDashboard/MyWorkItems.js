import React from 'react';
import { Table, Divider, Icon } from "antd";

import ContentHolder from '../../../components/utility/contentHolder';
import Box from '../../../components/utility/box';



const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
  }, 
  {
    title: 'Stage',
    dataIndex: 'stage',
    key: 'stage',
  }, 
  {
    title: 'Object',
    dataIndex: 'object',
    key: 'object',
  },
  {
    title: 'Target',
    dataIndex: 'target',
    key: 'target',
  }
];

const data = [{
  key: '1',
  name: 'John Brown',
  stage: 32,
  object: 'New York No. 1 Lake Park',
  target: 'target desc',
}, {
  key: '2',
  name: 'Jim Green',
  stage: 42,
  object: 'London No. 1 Lake Park',
  target: 'target desc',
}, {
  key: '3',
  name: 'Joe Black',
  stage: 32,
  object: 'Sidney No. 1 Lake Park',
  target: 'target desc',
}];

export default props => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}
