import React from 'react';

/**
 * Component: Misc_OGrid_09
 * Target URL: https://locomotive.ca/en
 * Category: misc
 * Tag: <div> | ID: "" | Class: "o-grid -col-12 -gutters"
 * Dimensions: 1829px x 290px
 */
export const Misc_OGrid_09: React.FC = () => {
  return (
    <div className="component-container-misc">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="o-grid -col-12 -gutters">
                <div className="o-grid_item || u-gc-1/6">
                    <button className="c-newsletter-modal_close" type="button" data-newsletter-modal="close">Close</button>
                </div>

                <div className="o-grid_item || u-gc-7/13">
                    Give an email, <br />get the newsletter
                </div>

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
    </div>
  );
};

export default Misc_OGrid_09;
