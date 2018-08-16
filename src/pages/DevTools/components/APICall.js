import React, { Component } from "react";
import { Button, Modal, Collapse } from "antd";

export default class extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleAPICall = () => {
    this.props.apiCall();
    this.setState({
      visible: true
    });
  };
  render() {
    return (
      <div>
        <h2>API Call</h2>
        <Button type="primary" onClick={this.handleAPICall}>
          Call midPoint API: {"/{type}/{oid}"}
        </Button>
        <br />
        (only in local env)
        <Modal
          title="API Call"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h4>FullName</h4>
          <pre>
            {this.props.data &&
              this.props.data.user &&
              this.props.data.user.fullName}
          </pre>
          <Collapse>
            <Collapse.Panel header="API response" key="1">
              <pre>
                {this.props.data && JSON.stringify(this.props.data, null, 4)}
              </pre>
            </Collapse.Panel>
          </Collapse>
        </Modal>
      </div>
    );
  }
}
