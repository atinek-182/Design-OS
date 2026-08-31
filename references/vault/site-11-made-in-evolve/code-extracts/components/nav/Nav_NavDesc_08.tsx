import React from 'react';

/**
 * Component: Nav_NavDesc_08
 * Target Site: made-in-evolve
 * Category: nav
 * Tag: <div> | ID: "" | Class: "nav__desc"
 * Dimensions: 266px x 27px
 */
export const Nav_NavDesc_08: React.FC = () => {
  return (
    <div className="component-container-nav">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="nav__desc"><div className="copy-email-wrapper"><!--$--><button data-copy-button="" data-copy-email="" aria-label="Copy email to clipboard" className="copy-email-button"><div className="copy-email-text__wrap"><!--$--><span data-copy-email-element="" className="copy-email-text__el">hello@madeinevolve.com</span><!--/$--><!--$--><span className="copy-email-text__el">Click to copy email</span><!--/$--><!--$--><span className="copy-email-text__el">Copied to clipboard!</span><!--/$--><div className="email__css w-embed"><style>
/* Hover styling */
@media (hover: hover) {
  .copy-email-button:hover .copy-email-icon__wrap{
    background: rgba(34, 80, 46, 0.9);
  }
  .copy-email-button:hover .copy-email-text__el{
    transform: translate(0px, -100%);
  }
}

/* Keyboard focus styling */
.copy-email-button:focus .copy-email-icon__wrap{
  background: rgba(34, 80, 46, 0.9);
}
.copy-email-button:focus .copy-email-text__el {
  transform: translate(0px, -100%);
}

/* 'Copied' state, when a user has clicked the button */
[data-copy-button="copied"] .copy-email-icon__wrap{ background: #0F8E2E !important; }
[data-copy-button="copied"] .copy-email-text__el{ transform: translate(0px, -200%) !important; }
</style></div></div></button><!--/$--></div><div className="paragraph">Modena, EST 2008©</div></div>
    </div>
  );
};

export default Nav_NavDesc_08;
