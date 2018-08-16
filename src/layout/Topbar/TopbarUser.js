import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popover from 'components/uielements/popover';
import IntlMessages from 'components/utility/intlMessages';
import userpic from 'assets/images/user0.jpg';

// TODO: remove
import authAction from 'pages/Common/Auth/actions';
import appAction from 'pages/App/actions';

import TopbarDropdownWrapper from './TopbarDropdown.style';

const { logout } = authAction;
const { closeAll } = appAction;
class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <a className="isoDropdownLink">
          <IntlMessages id="themeSwitcher.settings" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="sidebar.feedback" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="topbar.help" />
        </a>
        <a
          className="isoDropdownLink"
          onClick={() => {
            this.props.logout();
            this.props.closeAll();
          }}
        >
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
export default connect(null, { logout, closeAll })(TopbarUser);
