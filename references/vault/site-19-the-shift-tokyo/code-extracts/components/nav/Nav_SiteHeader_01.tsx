import React from 'react';

/**
 * Component: Nav_SiteHeader_01
 * Target Site: the-shift-tokyo
 * Category: nav
 * Tag: <header> | ID: "" | Class: "site-header"
 * Dimensions: 1920px x 0px
 */
export const Nav_SiteHeader_01: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <header className="site-header"><a href="/en/" data-to="home" className="site-name flip js-put-navi-a" @mouseenter="ui.onEnter" @mouseleave="ui.onLeave" data-c="a"><h1 className="fadein"><div className="o"><div className="t">THE SHIFT</div></div></h1></a><nav className="site-navi js-css" @mouseenter="styleMenu.onEnter()" @mouseleave="styleMenu.onLeave()"><div className="site-navi-origin fadein in">
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
</div></nav></header>
    </div>
  );
};

export default Nav_SiteHeader_01;
