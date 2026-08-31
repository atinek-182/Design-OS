import React from 'react';

/**
 * Component: Misc_Grid_01
 * Target Site: off-menu-design
 * Category: misc
 * Tag: <div> | ID: "" | Class: "grid transition-[grid-template-rows] duration-500 ease-in-out"
 * Dimensions: 1904px x 277px
 */
export const Misc_Grid_01: React.FC = () => {
  return (
    <div className="component-container-misc">
      {/* --- Raw Extracted DOM Structure --- */}
      <div className="grid transition-[grid-template-rows] duration-500 ease-in-out" style="grid-template-rows:0fr;transition-delay:0ms"><div className="overflow-hidden"><div className="transition-[opacity,filter] ease-in-out" style="opacity:0;filter:blur(8px);transition-duration:200ms;transition-delay:0ms"><div className="relative rounded-xl overflow-hidden bg-background aspect-2/3"><video src="/images/remi_dark@2x.mp4" poster="/images/remi_dark@2x.png" autoplay="" loop="" muted="" playsinline="" preload="auto" className="chat-intro-video w-full h-auto mask-b-from-40% mask-b-to-100%" style="mix-blend-mode:lighten"></video><div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-6"><div className="flex flex-col gap-2"><span className="text-xs font-medium leading-tight text-foreground/50">Remi</span><p className="text-base font-medium leading-tight text-foreground">Hey — I'm Remi, Off Menu's AI assistant.</p><p className="text-base font-medium leading-tight text-foreground">Anything catch your eye?</p></div><div className="flex flex-row flex-wrap gap-x-1 gap-y-2"><button className="cursor-pointer text-sm font-medium leading-tight transition-colors duration-200 rounded-full px-3 py-2 self-start flex items-center justify-center backdrop-blur-sm text-background bg-foreground hover:bg-foreground/90"><span>Where should I start?</span></button><button className="cursor-pointer text-sm font-medium leading-tight transition-colors duration-200 rounded-full px-3 py-2 self-start flex items-center justify-center backdrop-blur-sm text-foreground/50 hover:text-foreground bg-foreground/10"><span>What do you do?</span></button><button className="cursor-pointer text-sm font-medium leading-tight transition-colors duration-200 rounded-full px-3 py-2 self-start flex items-center justify-center backdrop-blur-sm text-foreground/50 hover:text-foreground bg-foreground/10"><span>I have a project</span></button></div></div></div></div></div></div>
    </div>
  );
};

export default Misc_Grid_01;
