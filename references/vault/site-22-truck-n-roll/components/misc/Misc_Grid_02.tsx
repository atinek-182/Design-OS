import React from 'react';

/**
 * Component: Misc_Grid_02
 * Target Site: truck-n-roll
 * Category: misc
 * Tag: <div> | ID: "" | Class: "grid md:grid-cols-12 gap-x-gutter gap-y-10"
 * Dimensions: 1904px x 27px
 */
export const Misc_Grid_02: React.FC = () => {
  return (
    <div className="component-container-misc">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="grid md:grid-cols-12 gap-x-gutter gap-y-10">
            <div className="col-start-1 md:col-end-6 lg:col-end-5">
                <h2 className="heading-sm max-w-110">The engine of every show.</h2>
            </div>
        </div>
    </div>
  );
};

export default Misc_Grid_02;
