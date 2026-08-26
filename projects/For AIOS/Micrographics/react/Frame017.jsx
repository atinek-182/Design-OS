import React from 'react';

export default function Frame017({
  bgColor = '#181818',
  text_1 = "\n  DESIGN DEPT.\nBUILDING \nBEYOND THE PLATFORM             20                                      26                                 ",
  textColor_1 = '#FFFAEE'
}) {
  return (
    <div style={{
      position: 'relative',
      width: '1080.0px',
      height: '1080.0px',
      backgroundColor: bgColor,
      overflow: 'hidden'
    }}>
      {/* Layer Graphic: Vector */}
      <svg style={{ position: 'absolute', left: '252.0px', top: '412.99999550827033px', width: '575.0px', height: '202.0px', overflow: 'visible' }} width="575" height="202" viewBox="0 0 575 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M287.5 2.06423e-05C414.667 3.17596e-05 529.787 80.0429 573.951 199.166L575 202L0 202L1.04919 199.166C45.2127 80.0428 160.333 9.52504e-06 287.5 2.06423e-05ZM568.938 197.787C524.619 81.8678 411.908 4.19341 287.5 4.1934C163.092 4.19338 50.381 81.8677 6.06201 197.787L568.938 197.787Z" fill="#FFFAEE"/>
</svg>
      {/* Layer:   DESIGN DEPT. BUILDING  BEYOND THE PLATFORM 20 26 */}
      <div style={{
        position: 'absolute',
        left: '342.0px',
        top: '463.2461528778076px',
        width: '367.0px',
        height: '135.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '25.41441535949707px',
          fontWeight: 600,
          lineHeight: '26.922109603881836px',
          letterSpacing: '-1.016576614379883px',
          color: textColor_1,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'pre',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_1}
        </div>
      </div>
    </div>
  );
}
