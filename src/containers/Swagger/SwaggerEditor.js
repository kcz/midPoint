import React, { Component } from 'react';
import { connect } from 'react-redux';

// import SwaggerEditorBundle from 'swagger-editor'

export class SwaggerEditorPage extends Component {
  render() {
    return <div id="swagger-container">SwaggerEditorPage</div>
  }
  componentDidMount(){
    // SwaggerEditorBundle({
    //   dom_id: '#swagger-container',
    //   layout: 'StandaloneLayout',
    //   presets: [
    //   ]
    // })
  }
}

export default connect(
  state => ({
  }),
  {}
)(SwaggerEditorPage);
