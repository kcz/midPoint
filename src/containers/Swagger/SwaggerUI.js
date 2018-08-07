import React, { Component } from 'react';
import { connect } from 'react-redux';

import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

export class SwaggerUIPage extends Component {
  render() {
    return <div id="swagger-container">SwaggerUI</div>
  }
  componentDidMount(){
    SwaggerUI({
      url: '/swagger.yml',
      dom_id: '#swagger-container'
    })
  }
}

export default connect(
  state => ({
  }),
  {}
)(SwaggerUIPage);
