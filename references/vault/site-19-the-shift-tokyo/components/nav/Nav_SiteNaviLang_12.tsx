import React from 'react';

/**
 * Component: Nav_SiteNaviLang_12
 * Target Site: the-shift-tokyo
 * Category: nav
 * Tag: <ul> | ID: "" | Class: "site-navi-lang js-css flip"
 * Dimensions: 160px x 160px
 */
export const Nav_SiteNaviLang_12: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <ul className="site-navi-lang js-css flip">
<li className="ui-lang-a" @click.prevent="__LANG__.onToggle" data-to="en"><a href="/en/" className="ui-btn-link ui-btn-link-re js-put-lang-en"><div className="o"><div className="t">EN</div></div></a></li>
<li className="ui-lang-a" @click.prevent="__LANG__.onToggle" data-to="ja"><a href="/" className="ui-btn-link ui-btn-link-re js-put-lang-ja"><div className="o"><div className="t">JA</div></div></a></li>
</ul>
    </div>
  );
};

export default Nav_SiteNaviLang_12;
