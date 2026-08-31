import React from 'react';

/**
 * Component: Footers_FooterInfoLinks_16
 * Target Site: made-in-evolve
 * Category: footers
 * Tag: <div> | ID: "" | Class: "footer__info-links is--press"
 * Dimensions: 93px x 60px
 */
export const Footers_FooterInfoLinks_16: React.FC = () => {
  return (
    <div className="component-container-footers">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="footer__info-links is--press"><a data-underline-link="" href="https://forbes.it/2024/05/07/creativita-digitale-e-integrazione-tecnologica-unalleanza-strategica-definisce-il-futuro-digitale-di-engine" target="_blank" className="underline-link is--alt">Forbes</a><a data-underline-link="" href="https://www.pambianconews.com/2022/04/01/evolve-lecommerce-agency-cresce-del-78-con-partnership-a-provvigione-342942/" target="_blank" className="underline-link is--alt">Pambianco News</a><a data-underline-link="" href="https://www.pambianconews.com/2022/06/27/pollini-scommette-sullomnichannel-con-lecommerce-agency-evolve-350045/" target="_blank" className="underline-link is--alt">Pambianco News</a><a data-underline-link="" href="https://forbes.it/2022/12/14/progetti-e-commerce-agency-settore-fashion" target="_blank" className="underline-link is--alt">Forbes</a><div className="underline__css w-embed"><style>
[data-underline-link] {
  text-decoration: none;
  position: relative;
}

[data-underline-link]::before,
[data-underline-link="alt"]::before,
[data-underline-link="alt"]::after{
  content: "";
  position: absolute;
  bottom: -0.0625em;
  left: 0;
  width: 100%;
  height: 0.0625em;
  background-color: currentColor;
  transition: transform 0.735s cubic-bezier(0.625, 0.05, 0, 1);
  transform-origin: right;
  transform: scaleX(0) rotate(0.001deg);
}

[data-underline-link="alt"]::before {
  transform-origin: left;
  transform: scaleX(1) rotate(0.001deg);
  transition-delay: 0.3s;
}

[data-underline-link="alt"]::after {
  transform-origin: right;
  transform: scaleX(0) rotate(0.001deg);
  transition-delay: 0s;
}

@media (hover: hover) and (pointer: fine) {
  [data-hover]:hover [data-underline-link]::before,
  [data-underline-link]:hover::before {
    transform-origin: left;
    transform: scaleX(1) rotate(0.001deg);
  }  
  
  [data-hover]:hover [data-underline-link="alt"]::before,
  [data-underline-link="alt"]:hover::before {
    transform-origin: right;
    transform: scaleX(0) rotate(0.001deg);
    transition-delay: 0s;
  }
  
  [data-hover]:hover [data-underline-link="alt"]::after,
  [data-underline-link="alt"]:hover::after {
    transform-origin: left;
    transform: scaleX(1) rotate(0.001deg);
    transition-delay: 0.3s;
  }
}
</style></div></div>
    </div>
  );
};

export default Footers_FooterInfoLinks_16;
