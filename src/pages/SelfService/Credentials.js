import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';

import { Form, Input, Button } from 'antd'

export default class extends Component {
  render() {
    const FormItem = Form.Item
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h2>Password</h2>
          <Form style={{width: "50%"}}>
            <FormItem label="Old Password">
              <Input type="password" />
            </FormItem>
            <FormItem label="New Password">
              <Input type="password" />
            </FormItem>
            <FormItem>
              <Button type="default">Back</Button>

              <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>Submit</Button>
            </FormItem>
          </Form>

        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
