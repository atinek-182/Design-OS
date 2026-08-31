import React from 'react';

/**
 * Component: Interactive_Accordion10_25
 * Target Site: truck-n-roll
 * Category: interactive
 * Tag: <c-accordion> | ID: "accordion-10" | Class: "c-accordion"
 * Dimensions: 1904px x 154px
 */
export const Interactive_Accordion10_25: React.FC = () => {
  return (
    <div className="component-container-interactive">
      {/* --- Raw Extracted DOM Structure --- */}
      <c-accordion className="c-accordion" style="--index:3" id="accordion-10">
    <details className="c-accordion_details">
        <summary className="c-accordion_summary">
            <span className="c-accordion_title">
                <span className="c-accordion_label body-lg">Need to add a stop?</span>
                                    <span className="c-accordion_label body-lg opacity-50">Consider it done.</span>
                            </span>
            <span className="c-accordion_icon-container" aria-hidden="true">
                






    <span className="c-icon -open c-accordion_icon">
                <svg className="svg-plus" focusable="false" aria-hidden="true">
            <use xlink:href="/dist/sprite.svg?v=1784869375#plus"></use>
        </svg>
    </span>
                






    <span className="c-icon -close c-accordion_icon">
                <svg className="svg-minus" focusable="false" aria-hidden="true">
            <use xlink:href="/dist/sprite.svg?v=1784869375#minus"></use>
        </svg>
    </span>
            </span>
        </summary>
        <div className="c-accordion_content pb-4" data-accordion="content">
            <div className="max-w-150">
                                                <p className="body-lg">An extra stop? No problem. We integrate it into your tour without disrupting the rest of the schedule.</p>
                                        </div>
        </div>
    </details>
</c-accordion>
    </div>
  );
};

export default Interactive_Accordion10_25;
