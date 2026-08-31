import React from 'react';

/**
 * Component: Modals_CNewsletterModalForm_04
 * Target URL: https://locomotive.ca/en
 * Category: modals
 * Tag: <form> | ID: "" | Class: "c-newsletter-modal_form"
 * Dimensions: 1646px x 171px
 */
export const Modals_CNewsletterModalForm_04: React.FC = () => {
  return (
    <div className="component-container-modals">
      {/* --- Raw Extracted DOM Structure --- */}
      <form action="/newsletter/subscribe" className="c-newsletter-modal_form" data-newsletter-modal="form">
                        <input type="email" name="email" className="c-newsletter-modal_input" placeholder="name@email.com" data-newsletter-modal="input" />
                        <input type="hidden" name="locale" value="en_CA" />
                        <button className="c-newsletter-modal_button" type="submit">
                            <span className="c-newsletter-modal_button_label">Subscribe</span>
                        </button>
                    </form>
    </div>
  );
};

export default Modals_CNewsletterModalForm_04;
