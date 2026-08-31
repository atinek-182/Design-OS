import React from 'react';

/**
 * Component: Misc_ChatInputText_04
 * Target Site: off-menu-design
 * Category: misc
 * Tag: <div> | ID: "chat-input-text" | Class: "grid overflow-hidden transition-[grid-template-columns] duration-300"
 * Dimensions: 1904px x 25px
 */
export const Misc_ChatInputText_04: React.FC = () => {
  return (
    <div className="component-container-misc">
      {/* --- Raw Extracted DOM Structure --- */}
      <div id="chat-input-text" className="grid overflow-hidden transition-[grid-template-columns] duration-300" style="grid-template-columns:1fr"><div className="overflow-hidden flex flex-row gap-0 items-center min-w-0 justify-center"><div className="mx-4 relative flex items-center min-w-0 max-w-80"><span className="text-sm text-foreground whitespace-nowrap transition-all duration-500 ease-out opacity-100 blur-0">Let's work together</span><span className="absolute inset-0 flex items-center text-sm text-foreground whitespace-nowrap transition-all duration-500 ease-out opacity-0 blur-xs">Thinking...</span><textarea rows="1" placeholder="Ask me anything..." className="w-full p-0 outline-none bg-transparent text-foreground placeholder:text-foreground/50 text-sm transition-all duration-500 ease-in-out resize-none overflow-y-auto leading-5 opacity-0 blur-xs pointer-events-none absolute inset-0"></textarea></div></div></div>
    </div>
  );
};

export default Misc_ChatInputText_04;
