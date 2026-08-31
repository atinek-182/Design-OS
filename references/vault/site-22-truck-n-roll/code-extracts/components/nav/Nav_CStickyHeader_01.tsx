import React from 'react';

/**
 * Component: Nav_CStickyHeader_01
 * Target Site: truck-n-roll
 * Category: nav
 * Tag: <div> | ID: "" | Class: "c-sticky-header"
 * Dimensions: 1904px x 91px
 */
export const Nav_CStickyHeader_01: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="c-sticky-header">
    <div className="c-sticky-header_title">
        <a href="https://trucknroll.com/" className="hover-underline">Truck’N Roll®</a>
    </div>
    





<nav className="c-nav c-sticky-header_nav">
    <ul className="c-nav_list">

            
        <li className="c-nav_item is-active">
            <a href="https://trucknroll.com/" className="c-nav_link">
                Services
            </a>
        </li>
            
        <li className="c-nav_item ">
            <a href="https://trucknroll.com/culture" className="c-nav_link">
                Culture
            </a>
        </li>
    
                <li className="c-nav_item ">
            <button className="c-nav_link" data-modal-contact-toggler="" aria-label="Open contact modal" aria-expanded="false">Contact</button>
        </li>
    </ul>
</nav>
</div>
    </div>
  );
};

export default Nav_CStickyHeader_01;
