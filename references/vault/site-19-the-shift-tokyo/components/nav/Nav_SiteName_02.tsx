import React from 'react';

/**
 * Component: Nav_SiteName_02
 * Target Site: the-shift-tokyo
 * Category: nav
 * Tag: <a> | ID: "" | Class: "site-name flip js-put-navi-a"
 * Dimensions: 251px x 143px
 */
export const Nav_SiteName_02: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <a href="/en/" data-to="home" className="site-name flip js-put-navi-a" @mouseenter="ui.onEnter" @mouseleave="ui.onLeave" data-c="a"><h1 className="fadein"><div className="o"><div className="t">THE SHIFT</div></div></h1></a>
    </div>
  );
};

export default Nav_SiteName_02;
