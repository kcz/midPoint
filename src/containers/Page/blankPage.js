import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Page is still under development</h1>
          <h3>{this.props.history.location.pathname.split('/').slice(-1)}</h3>
          <pre>
            {
              JSON.stringify(this.props, null, 4)
            }
          </pre>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
