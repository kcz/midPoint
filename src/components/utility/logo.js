import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../settings';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/midPoint">
              <i className={siteConfig.siteIcon} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/midPoint">{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
