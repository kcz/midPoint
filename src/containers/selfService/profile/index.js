import React, { Component } from 'react';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import Tabs, { TabPane } from '../../../components/uielements/tabs';
import TabStyle from './tab.style';
import { Badge } from 'antd'

import * as PartialViews from './partials/index'
import { tabInfos } from './tabConfig'


export default class extends Component {
    renderPartial(tabInfo) {
      let PartialView = PartialViews[tabInfo.value];
      return <PartialView />;
    }
    render() {
      const badgeStyle = {backgroundColor: "#52c41a", marginTop: "-15px"};

      return (
        <LayoutContentWrapper>
          <TabStyle className="isoLayoutContent">
            <Tabs className="isoTableDisplayTab">
              {tabInfos.map(tabInfo => (
                <TabPane 
                  tab={
                    tabInfo.count?
                    (<span>{tabInfo.title}<Badge count={1} style={badgeStyle}></Badge></span>)
                    :tabInfo.title
                  } 
                  key={tabInfo.title}>
                  {this.renderPartial(tabInfo)}
                </TabPane>
              ))}
            </Tabs>
          </TabStyle>
        </LayoutContentWrapper>
      );
    }
  }