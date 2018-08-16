import React from 'react';
import { Input, Select } from "antd";

const Option = Select.Option;

const selectAfter = (
  <Select defaultValue="users" style={{ width: 90 }}>
    <Option value="users">Users</Option>
    <Option value="resources">Resources</Option>
    <Option value="tasks">Tasks</Option>
  </Select>
);

export default props => {
  return (
    <Input
      addonAfter={selectAfter}
      size={'large'}
      placeholder="Enter the name to search"
    />
  )
}
