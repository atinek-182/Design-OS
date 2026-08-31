import React from 'react';

/**
 * Component: Nav_CHeader_03
 * Target URL: https://locomotive.ca/en
 * Category: nav
 * Tag: <div> | ID: "" | Class: "c-header"
 * Dimensions: 1920px x 68px
 */
export const Nav_CHeader_03: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="c-header" data-header="header">
        <a href="en" className="c-header_logo" data-header="logo">
            <span className="c-header_logo_inner" data-hover-shuffle="">Locomotive</span>®
        </a>

        <span aria-hidden="true" className="c-header_icon"></span>

        <nav className="c-header_menu || c-header-menu">
            <ul className="c-header-menu_list">
                                <li className="c-header-menu_item"><a href="en/work" className="c-header-menu_link" data-hover-shuffle="">Work</a></li>
                                <li className="c-header-menu_item"><a href="en/agency" className="c-header-menu_link" data-hover-shuffle="">Agency</a></li>
                                <li className="c-header-menu_item"><a href="en/careers" className="c-header-menu_link" data-hover-shuffle="">Careers</a></li>
                
                <li className="c-header-menu_item">
                    <a target="_blank" rel="noopener noreferrer" href="https://store.locomotive.ca" className="c-header-menu_link" data-hover-shuffle="">Store</a>
                </li>
            </ul>
        </nav>

                    <a href="en/contact" className="c-header_cta " data-hover-shuffle="">Let's talk</a>
        
        <button className="c-header_menu-toggler" data-header="menu-toggler" data-header-open-label="Menu" data-header-close-label="Close" aria-expanded="false" aria-controls="mobile-menu" aria-label="Navigation mobile">
            Menu
        </button>
    </div>
    </div>
  );
};

export default Nav_CHeader_03;
