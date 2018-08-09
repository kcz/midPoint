import React, { Component } from 'react';
import { StickerWidgetWrapper } from './style';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    const { fontColor, bgColor, width, icon, number, text, link } = this.props;

    const textColor = {
      color: fontColor
    };
    const widgetStyle = {
      backgroundColor: bgColor,
      width: width
    };
    const iconStyle = {
      color: fontColor
    };

    return (
      <StickerWidgetWrapper className="isoStickerWidget" style={widgetStyle}>
        <div className="isoIconWrapper">
          <i className={icon} style={iconStyle} />
        </div>

        {/* TODO: move Link outside */}
        <Link className="isoContentWrapper" to={link? link: "javascript:void 0"}>
          <h3 className="isoStatNumber" style={textColor}>
            {number}
          </h3>
          <span className="isoLabel" style={textColor}>
            {text}
          </span>
        </Link>
      </StickerWidgetWrapper>
    );
  }
}
