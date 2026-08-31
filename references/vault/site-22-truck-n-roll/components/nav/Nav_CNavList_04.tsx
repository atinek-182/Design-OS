import React from 'react';

/**
 * Component: Nav_CNavList_04
 * Target Site: truck-n-roll
 * Category: nav
 * Tag: <ul> | ID: "" | Class: "c-nav_list"
 * Dimensions: 1904px x 57px
 */
export const Nav_CNavList_04: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
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
    </div>
  );
};

export default Nav_CNavList_04;
