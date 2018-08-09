import React, { Component } from 'react';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import Box from '../../../components/utility/box';
import ContentHolder from '../../../components/utility/contentHolder';

import { Row, Col, Button, Icon } from "antd";

import basicStyle from '../../../settings/basicStyle';

import SearchBox from './SearchBox'
import HotLinks from './HotLinks'
import MyWorkItems from './MyWorkItems'

export default class extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    
    
    const ButtonGroup = Button.ButtonGroup;

    return (
      <LayoutContentWrapper>
        <Row style={rowStyle} gutter={gutter} justify="center">
          <Col span={8} offset={8} style={colStyle}>
            <SearchBox />
          </Col>
          <Col md={4} style={colStyle}>
            <Button type="primary" size={'large'}>Search</Button>
          </Col>
        </Row>
        <Box
          title={<span><Icon type="link" /> Hot Links</span>}
        >
          <ContentHolder>
            <HotLinks />
          </ContentHolder>
        </Box>
        <Box
          title={<span><Icon type="folder" /> My Work Items</span>}
        >
          <ContentHolder>
            <MyWorkItems />
          </ContentHolder>
        </Box>
        
      </LayoutContentWrapper>
    );
  }
}
