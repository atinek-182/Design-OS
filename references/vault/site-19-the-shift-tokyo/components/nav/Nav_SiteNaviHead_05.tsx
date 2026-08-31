import React from 'react';

/**
 * Component: Nav_SiteNaviHead_05
 * Target Site: the-shift-tokyo
 * Category: nav
 * Tag: <div> | ID: "" | Class: "site-navi-head js-css f-s"
 * Dimensions: 216px x 144px
 */
export const Nav_SiteNaviHead_05: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="site-navi-head js-css f-s" @click.prevent="styleMenu.onToggle()"><a href="#"><div className="ui-btn-link"><div className="o"><div className="t">MENU</div></div></div></a></div>
    </div>
  );
};

export default Nav_SiteNaviHead_05;
