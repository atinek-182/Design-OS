import React from 'react';

export default function Frame006({
  bgColor = '#181818',
  text_1 = "51\u00b050\u203218\u2033N       12\u00b013\u203238\u2033E",
  textColor_1 = '#FFFAEE',
  text_2 = "Staatliches Bauhaus",
  textColor_2 = '#FFFAEE',
  text_3 = "Founded 1919",
  textColor_3 = '#FFFAEE',
  text_4 = "\u00a9",
  textColor_4 = '#FFFAEE'
}) {
  return (
    <div style={{
      position: 'relative',
      width: '1080.0px',
      height: '1080.0px',
      backgroundColor: bgColor,
      overflow: 'hidden'
    }}>
      {/* Layer: 51°50′18″N 12°13′38″E */}
      <div style={{
        position: 'absolute',
        left: '398.0px',
        top: '470.6840000152588px',
        width: '460.0px',
        height: '29.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '24.0px',
          fontWeight: 300,
          lineHeight: '28.631999969482422px',
          letterSpacing: '6.840000000000001px',
          color: textColor_1,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_1}
        </div>
      </div>
      {/* Layer: Staatliches Bauhaus */}
      <div style={{
        position: 'absolute',
        left: '398.0px',
        top: '522.6840000152588px',
        width: '374.0px',
        height: '29.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '24.0px',
          fontWeight: 300,
          lineHeight: '28.631999969482422px',
          letterSpacing: '6.24px',
          color: textColor_2,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          wordBreak: 'break-word'
        }}>
          {text_2}
        </div>
      </div>
      {/* Layer: Founded 1919 */}
      <div style={{
        position: 'absolute',
        left: '399.0px',
        top: '574.6840000152588px',
        width: '235.0px',
        height: '29.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '24.0px',
          fontWeight: 300,
          lineHeight: '28.631999969482422px',
          letterSpacing: '6.24px',
          color: textColor_3,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          wordBreak: 'break-word'
        }}>
          {text_3}
        </div>
      </div>
      {/* Layer: © */}
      <div style={{
        position: 'absolute',
        left: '839.0px',
        top: '574.6840000152588px',
        width: '21.0px',
        height: '29.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '24.0px',
          fontWeight: 300,
          lineHeight: '28.631999969482422px',
          letterSpacing: '6.24px',
          color: textColor_4,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          wordBreak: 'break-word'
        }}>
          {text_4}
        </div>
      </div>
      {/* Layer Graphic: Circles */}
      <svg style={{ position: 'absolute', left: '210.0px', top: '473.0px', width: '132.0px', height: '134.0px', overflow: 'visible' }} width="132" height="134" viewBox="0 0 132 134" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.9454 133.5C85.3473 133.5 101.076 118.602 101.076 100.224C101.076 81.8463 85.3473 66.9482 65.9454 66.9482C46.5434 66.9482 30.8151 81.8463 30.8151 100.224C30.8151 118.602 46.5434 133.5 65.9454 133.5Z" stroke="#FFFAEE" strokeMiterlimit="10"/>
<path d="M65.9454 67.0518C85.3473 67.0518 101.076 52.1537 101.076 33.7759C101.076 15.3981 85.3473 0.5 65.9454 0.5C46.5434 0.5 30.8151 15.3981 30.8151 33.7759C30.8151 52.1537 46.5434 67.0518 65.9454 67.0518Z" stroke="#FFFAEE" strokeMiterlimit="10"/>
<path d="M96.3697 83.638C115.772 83.638 131.5 68.7399 131.5 50.3621C131.5 31.9843 115.772 17.0862 96.3697 17.0862C76.9678 17.0862 61.2394 31.9843 61.2394 50.3621C61.2394 68.7399 76.9678 83.638 96.3697 83.638Z" stroke="#FFFAEE" strokeMiterlimit="10"/>
<path d="M35.6303 116.914C55.0322 116.914 70.7606 102.016 70.7606 83.6379C70.7606 65.2601 55.0322 50.362 35.6303 50.362C16.2284 50.362 0.5 65.2601 0.5 83.6379C0.5 102.016 16.2284 116.914 35.6303 116.914Z" stroke="#FFFAEE" strokeMiterlimit="10"/>
<path d="M35.6303 83.638C55.0322 83.638 70.7606 68.7399 70.7606 50.3621C70.7606 31.9843 55.0322 17.0862 35.6303 17.0862C16.2284 17.0862 0.5 31.9843 0.5 50.3621C0.5 68.7399 16.2284 83.638 35.6303 83.638Z" stroke="#FFFAEE" strokeMiterlimit="10"/>
<path d="M96.3697 116.914C115.772 116.914 131.5 102.016 131.5 83.6379C131.5 65.2601 115.772 50.362 96.3697 50.362C76.9678 50.362 61.2394 65.2601 61.2394 83.6379C61.2394 102.016 76.9678 116.914 96.3697 116.914Z" stroke="#FFFAEE" strokeMiterlimit="10"/>
</svg>
      {/* Layer Graphic: Rectangle 3999 */}
      <svg style={{ position: 'absolute', left: '143.0px', top: '433.0px', width: '793.0px', height: '214.0px', overflow: 'visible' }} width="793" height="214" viewBox="0 0 793 214" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="792" height="213" rx="106.5" stroke="#FFFAEE"/>
</svg>
    </div>
  );
}
