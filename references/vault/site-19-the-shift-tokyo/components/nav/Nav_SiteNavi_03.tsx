import React from 'react';

/**
 * Component: Nav_SiteNavi_03
 * Target Site: the-shift-tokyo
 * Category: nav
 * Tag: <nav> | ID: "" | Class: "site-navi js-css"
 * Dimensions: 240px x 406px
 */
export const Nav_SiteNavi_03: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <nav className="site-navi js-css" @mouseenter="styleMenu.onEnter()" @mouseleave="styleMenu.onLeave()"><div className="site-navi-origin fadein in">
<div className="site-navi-head js-css f-s" @click.prevent="styleMenu.onToggle()"><a href="#"><div className="ui-btn-link"><div className="o"><div className="t">MENU</div></div></div></a></div>
<div className="site-navi-body js-css">
<ul className="site-navi-ul flip">
<li><a data-to="home" href="/en/" className="js-put-navi-a"><div className="in">
<div className="u js-css"><div></div></div>
<div className="o"><div className="t js-css"><div className="w">Home</div></div></div>
</div></a></li>
<li><a data-to="archive-project" href="/en/project/" className="js-put-navi-a"><div className="in">
<div className="u js-css"><div></div></div>
<div className="o"><div className="t js-css"><div className="w">Project</div></div></div>
</div></a></li>
<li><a data-to="archive-research" href="/en/research/" className="js-put-navi-a"><div className="in">
<div className="u js-css"><div></div></div>
<div className="o"><div className="t js-css"><div className="w">Research</div></div></div>
</div></a></li>
<li><a data-to="about" href="/en/about/" className="js-put-navi-a"><div className="in">
<div className="u js-css"><div></div></div>
<div className="o"><div className="t js-css"><div className="w">About</div></div></div>
</div></a></li>
</ul>
<ul className="site-navi-lang js-css flip">
<li className="ui-lang-a" @click.prevent="__LANG__.onToggle" data-to="en"><a href="/en/" className="ui-btn-link ui-btn-link-re js-put-lang-en"><div className="o"><div className="t">EN</div></div></a></li>
<li className="ui-lang-a" @click.prevent="__LANG__.onToggle" data-to="ja"><a href="/" className="ui-btn-link ui-btn-link-re js-put-lang-ja"><div className="o"><div className="t">JA</div></div></a></li>
</ul>
</div>
<div className="site-navi-bg js-css"><div></div></div>
</div></nav>
    </div>
  );
};

export default Nav_SiteNavi_03;
