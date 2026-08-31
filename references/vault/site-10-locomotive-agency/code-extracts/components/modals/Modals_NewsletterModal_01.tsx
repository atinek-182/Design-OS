import React from 'react';

/**
 * Component: Modals_NewsletterModal_01
 * Target URL: https://locomotive.ca/en
 * Category: modals
 * Tag: <div> | ID: "newsletter-modal" | Class: "c-newsletter-modal"
 * Dimensions: 1920px x 574px
 */
export const Modals_NewsletterModal_01: React.FC = () => {
  return (
    <div className="component-container-modals">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="c-newsletter-modal" id="newsletter-modal" data-module-newsletter-modal="m12" data-newsletter-modal-success="Check your email to confirm your subscription. Thanks" data-newsletter-modal-error="An error has occured.">
    <div className="c-newsletter-modal_inner">
        <div className="o-container">
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
    </div>

    <div className="c-newsletter-modal_background"></div>
</div>
    </div>
  );
};

export default Modals_NewsletterModal_01;
