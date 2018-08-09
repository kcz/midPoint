import React from 'react';
import { Col } from "antd";

import IsoWidgetsWrapper from '../../Widgets/widgetsWrapper';
import StickerWidget from '../../Widgets/sticker/stickerWidget';

const data = [
  {
      link: "PageAdmin.menu.profile",
      number: "Profile",
      text: "edit profile",
      icon: "ion-compass",
      fontColor: "#ffffff",
      bgColor: "#7266BA"
  },
  {
    link: "PageAdmin.menu.credentials",
    number: "Credentials",
    text: "view credentials",
    icon: "ion-locked",
    fontColor: "#ffffff",
    bgColor: "#42A5F6"
  },
  {
    link: "ageAdmin.menu.top.users.list",
    number: "Users",
    text: "list users",
    icon: "ion-ios-person",
    fontColor: "#ffffff",
    bgColor: "#7ED320"
  },
  {
    link: "PageAdmin.menu.top.resources.list",
    number: "Resources",
    text: "list resources",
    icon: "ion-soup-can",
    fontColor: "#ffffff",
    bgColor: "#F75D81"
  }
];

export default props => {
  return (
    data.map(sticker=>(
        <Col lg={6} md={12} sm={12} xs={24}>
          <IsoWidgetsWrapper>
            <StickerWidget {...sticker} />
          </IsoWidgetsWrapper>
        </Col>
      ))
  )
}
