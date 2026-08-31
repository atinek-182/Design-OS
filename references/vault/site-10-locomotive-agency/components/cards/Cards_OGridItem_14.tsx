import React from 'react';

/**
 * Component: Cards_OGridItem_14
 * Target URL: https://locomotive.ca/en
 * Category: cards
 * Tag: <div> | ID: "" | Class: "o-grid_item"
 * Dimensions: 1829px x 200px
 */
export const Cards_OGridItem_14: React.FC = () => {
  return (
    <div className="component-container-cards">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="o-grid_item">
                    <form action="/newsletter/subscribe" className="c-newsletter-modal_form" data-newsletter-modal="form">
                        <input type="email" name="email" className="c-newsletter-modal_input" placeholder="name@email.com" data-newsletter-modal="input" />
                        <input type="hidden" name="locale" value="en_CA" />
                        <button className="c-newsletter-modal_button" type="submit">
                            <span className="c-newsletter-modal_button_label">Subscribe</span>
                        </button>
                    </form>

                    <div className="c-newsletter-modal_feedback" data-newsletter-modal="feedback"></div>
                </div>
    </div>
  );
};

export default Cards_OGridItem_14;
