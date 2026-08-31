import React from 'react';

/**
 * Component: Nav_Header_02
 * Target URL: https://locomotive.ca/en
 * Category: nav
 * Tag: <header> | ID: "" | Class: ""
 * Dimensions: 1920px x 0px
 */
export const Nav_Header_02: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <header data-module-header="m4">
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

    <nav className="c-menu" data-header="menu" id="mobile-menu" aria-label="Navigation mobile">
        <div className="c-menu_inner">
            <ul className="c-menu_nav">
                                <li className="c-menu_nav_item">
                    <a href="en/work" className="c-menu_nav_link ">Work</a>
                </li>
                                <li className="c-menu_nav_item">
                    <a href="en/agency" className="c-menu_nav_link ">Agency</a>
                </li>
                                <li className="c-menu_nav_item">
                    <a href="en/careers" className="c-menu_nav_link ">Careers</a>
                </li>
                
                                <li className="c-menu_nav_item">
                    <a href="en/contact" className="c-menu_nav_link ">Let's talk</a>
                </li>
                
                <li className="c-menu_nav_item">
                    <a className="c-menu_nav_link" target="_blank" rel="noopener noreferrer" href="https://store.locomotive.ca">Store</a>
                </li>
            </ul>

            <div className="c-menu_footer">
                                                                                    <a href="https://locomotive.ca/fr" className="c-menu_langswitcher" data-load="false">Français</a>
                                
                <span className="c-menu_location">
                    <span className="u-screen-reader-text">Montréal, Quebec</span>
                    <span aria-hidden="true">🛑🚹🚺</span>
                </span>
            </div>
        </div>
    </nav>
</header>
    </div>
  );
};

export default Nav_Header_02;
