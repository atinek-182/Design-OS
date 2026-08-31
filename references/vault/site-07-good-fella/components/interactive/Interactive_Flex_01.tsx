import React from 'react';

/**
 * Component: Interactive_Flex_01
 * Target Site: good-fella
 * Category: interactive
 * Tag: <form> | ID: "" | Class: "flex flex-col gap-6"
 * Dimensions: 1904px x 201px
 */
export const Interactive_Flex_01: React.FC = () => {
  return (
    <div className="component-container-interactive">
      {/* --- Raw Extracted DOM Structure --- */}
      <form className="flex flex-col gap-6"><div className="flex flex-col gap-6"><input className="flex w-full border border-border bg-surface font-sans text-foreground file:border-0 file:bg-transparent file:font-medium placeholder:text-foreground-muted outline-none transition-colors duration-200 ease-out focus:border-foreground disabled:cursor-not-allowed disabled:opacity-50 h-40 px-12 py-8 text-body-sm file:text-body-sm" placeholder="Name" required="" autoComplete="name" type="text" name="name" /><input className="flex w-full border border-border bg-surface font-sans text-foreground file:border-0 file:bg-transparent file:font-medium placeholder:text-foreground-muted outline-none transition-colors duration-200 ease-out focus:border-foreground disabled:cursor-not-allowed disabled:opacity-50 h-40 px-12 py-8 text-body-sm file:text-body-sm" placeholder="Email" required="" autoComplete="email" type="email" name="email" /><button type="submit" className="group inline-flex min-w-0 shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium font-mono uppercase outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 text-body-sm w-full"><span className="relative flex w-full items-center gap-6"><span className="flex items-center justify-center transition-transform duration-700 [transition-timing-function:var(--ease-power4-in-out)] size-32 lg:size-40 origin-left -rotate-45 scale-0 bg-foreground text-background group-hover:rotate-0 group-hover:scale-100"><svg className="size-[0.75em]" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"></path></svg></span><span className="flex w-full flex-1 items-center justify-center transition-transform duration-700 [transition-timing-function:var(--ease-power4-in-out)] h-32 -translate-x-[calc(32px+6px)] px-8 lg:h-40 lg:-translate-x-[calc(40px+6px)] lg:px-12 bg-foreground text-background group-hover:translate-x-0"><span>Subscribe</span></span><span className="flex items-center justify-center transition-transform duration-700 [transition-timing-function:var(--ease-power4-in-out)] size-32 lg:size-40 absolute right-0 z-10 origin-right rotate-0 scale-100 bg-foreground text-background group-hover:-rotate-45 group-hover:scale-0"><svg className="size-[0.75em]" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"></path></svg></span></span></button></div><input autoComplete="off" tabIndex="-1" aria-hidden="true" className="pointer-events-none absolute -left-[9999px] -z-10 h-px w-px overflow-hidden opacity-0" type="text" name="website" /><p className="text-body-sm text-foreground-muted opacity-60">Unsubscribe anytime.</p></form>
    </div>
  );
};

export default Interactive_Flex_01;
