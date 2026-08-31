import React from 'react';

/**
 * Component: Nav_SiteHeader_01
 * Target Site: oryzo-ai
 * Category: nav
 * Tag: <header> | ID: "site-header" | Class: "link-header"
 * Dimensions: 1904px x 675px
 */
export const Nav_SiteHeader_01: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <header id="site-header" className="link-header"> <a id="site-header-logo" data-width="94" href="#hero"><div><svg viewBox="0 0 94 21"><use href="#logo-tmpl"></use></svg></div></a> <nav id="site-header-nav" className="desktop-only" style="transform: translate3d(0px, 0px, 0px);"> <ul> <li className="is-flipper is-active" data-id="hero" style="transform: translate3d(0px, -60px, 0px) translate3d(0px, -100%, 0px);"><a className="is-flipper-target" href="#hero">Intro</a></li> <li className="is-flipper" data-id="features" style="transform: translate3d(0px, -60px, 0px) translate3d(0px, -100%, 0px);"><a className="is-flipper-target" href="#features">Features</a></li> <li className="is-flipper" data-id="testimonies" style="transform: translate3d(0px, -60px, 0px) translate3d(0px, -100%, 0px);"><a className="is-flipper-target" href="#testimonies">Product</a></li> <li className="is-flipper" data-id="footer" style="transform: translate3d(0px, -60px, 0px) translate3d(0px, -100%, 0px);"><a className="is-flipper-target" href="#contact">Contact</a></li> </ul> <div id="site-header-line" className="o-dashline" style="transform: translateX(0px); width: 48.8906px; opacity: 0;"></div> </nav> <div id="site-header-mobile-menu" className="mobile-only"> <div></div> <ul> <li data-id="hero"><a href="#hero">Intro</a></li> <li data-id="features"><a href="#features">Features</a></li> <li data-id="testimonies"><a href="#testimonies">Product</a></li> <li data-id="footer"><a href="#contact">Contact</a></li> </ul> <div id="site-header-mobile-bottom"> <div className="sub2">general enquires:</div> <a className="sub1" href="mailto:hello@lusion.co" target="_blank">hello@lusion.co</a> </div> </div> <div id="site-header-mobile-btn" className="mobile-only" style="visibility: visible; opacity: 1;"><span>Menu</span><span>Close</span></div> <div id="site-header-blocker"></div> </header>
    </div>
  );
};

export default Nav_SiteHeader_01;
