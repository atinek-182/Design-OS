import React from 'react';

/**
 * Component: Interactive_CAccordionDetails_02
 * Target Site: truck-n-roll
 * Category: interactive
 * Tag: <details> | ID: "" | Class: "c-accordion_details"
 * Dimensions: 1904px x 154px
 */
export const Interactive_CAccordionDetails_02: React.FC = () => {
  return (
    <div className="component-container-interactive">
      {/* --- Raw Extracted DOM Structure --- */}
      <details className="c-accordion_details">
        <summary className="c-accordion_summary">
            <span className="c-accordion_title">
                <span className="c-accordion_label body-lg">Night Shift?</span>
                                    <span className="c-accordion_label body-lg opacity-50">It's what we do!</span>
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
                                                <p className="body-lg">Truck’N Roll provides round-the-clock service, day and night, keeping your logistics running smoothly. All our vehicles are equipped with advanced trackers for 24/7 cargo monitoring.</p>
                                        </div>
        </div>
    </details>
    </div>
  );
};

export default Interactive_CAccordionDetails_02;
