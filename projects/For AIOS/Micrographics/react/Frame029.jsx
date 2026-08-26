import React from 'react';

export default function Frame029({
  bgColor = '#181818',
  text_1 = "DSGN",
  textColor_1 = '#FFFAEE',
  text_2 = "THE   DESIGN      DEPARTMENT\nlayout, concept,  PIXELS  ALL",
  textColor_2 = '#FFFAEE',
  text_3 = "MADE BY HUMANS",
  textColor_3 = '#FFFAEE',
  text_4 = "\u00a9  2026    Property of dsgn dept",
  textColor_4 = '#FFFAEE',
  text_5 = "26",
  textColor_5 = '#FFFAEE',
  text_6 = "\u00ae",
  textColor_6 = '#FFFAEE'
}) {
  return (
    <div style={{
      position: 'relative',
      width: '1080.0px',
      height: '1080.0px',
      backgroundColor: bgColor,
      overflow: 'hidden'
    }}>
      {/* Layer: DSGN */}
      <div style={{
        position: 'absolute',
        left: '438.0px',
        top: '299.0867462158203px',
        width: '205.0px',
        height: '155.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'DIN Condensed', 'Barlow Condensed', sans-serif",
          fontSize: '129.13253784179688px',
          fontWeight: 700,
          lineHeight: '154.95904541015625px',
          letterSpacing: '-5.165301513671875px',
          color: textColor_1,
          textAlign: 'center',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_1}
        </div>
      </div>
      {/* Layer: THE DESIGN DEPARTMENT layout, concept, PIXELS ALL */}
      <div style={{
        position: 'absolute',
        left: '353.0px',
        top: '474.50900077819824px',
        width: '374.0px',
        height: '102.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'IBM Plex Mono', sans-serif",
          fontSize: '25.0px',
          fontWeight: 400,
          lineHeight: '33.981998443603516px',
          letterSpacing: '-1.7500000000000002px',
          color: textColor_2,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'pre',
          textTransform: 'uppercase',
          wordBreak: 'break-word'
        }}>
          {text_2}
        </div>
      </div>
      {/* Layer: MADE BY HUMANS */}
      <div style={{
        position: 'absolute',
        left: '456.0px',
        top: '543.25px',
        width: '188.0px',
        height: '33.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'IBM Plex Mono', sans-serif",
          fontSize: '25.0px',
          fontWeight: 400,
          lineHeight: '32.5px',
          letterSpacing: '-1.7500000000000002px',
          color: textColor_3,
          textAlign: 'center',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_3}
        </div>
      </div>
      {/* Layer Graphic: Rectangle 3999 */}
      <svg style={{ position: 'absolute', left: '417.0px', top: '549.908203125px', width: '266.0px', height: '30.0px', overflow: 'visible' }} width="266" height="30" viewBox="0 0 266 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="0.75" width="264.5" height="28.5" rx="14.25" stroke="#FFFAEE" strokeWidth="1.5"/>
</svg>
      {/* Layer: © 2026 Property of dsgn dept */}
      <div style={{
        position: 'absolute',
        left: '327.0px',
        top: '661.25px',
        width: '426.0px',
        height: '33.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'IBM Plex Mono', sans-serif",
          fontSize: '25.0px',
          fontWeight: 400,
          lineHeight: '32.5px',
          letterSpacing: '-1.7500000000000002px',
          color: textColor_4,
          textAlign: 'center',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          wordBreak: 'break-word'
        }}>
          {text_4}
        </div>
      </div>
      {/* Layer Graphic: Group 4 */}
      <svg style={{ position: 'absolute', left: '517.052734375px', top: '606.0px', width: '46.0px', height: '40.0px', overflow: 'visible' }} width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M21.8577 33.7211V39.6053C21.2125 39.6662 20.5586 39.7011 19.8873 39.7011C8.93665 39.7011 0 30.779 0 19.8462C0 8.91337 8.93665 0 19.8873 0C20.5499 0 21.2125 0.0348179 21.8577 0.0957491V5.97997C21.2125 5.88422 20.5586 5.84069 19.8873 5.84069C12.1538 5.84069 5.85023 12.1427 5.85023 19.8462C5.85023 27.5496 12.1626 33.8517 19.8873 33.8517C20.5499 33.8517 21.2125 33.7994 21.8577 33.7124V33.7211Z" fill="#FFFAEE"/>
<path fillRule="evenodd" clipRule="evenodd" d="M30.3325 16.817H41.815V22.884H30.3325C31.7275 29.1512 37.3423 33.8604 44.0295 33.8604C44.6921 33.8604 45.3548 33.8081 45.9999 33.7211V39.6053C45.346 39.6662 44.6921 39.7011 44.0295 39.7011C33.0701 39.7011 24.1509 30.779 24.1509 19.8549C24.1509 8.93078 33.0701 0 44.0295 0C44.6921 0 45.3548 0.0348179 45.9999 0.0957491V5.97997C45.346 5.88422 44.6921 5.84069 44.0295 5.84069C37.3423 5.84069 31.7188 10.5498 30.3325 16.817Z" fill="#FFFAEE"/>
</svg>
      {/* Layer Graphic: Group 6 */}
      <svg style={{ position: 'absolute', left: '422.0px', top: '606.0px', width: '40.0px', height: '40.0px', overflow: 'visible' }} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9998 0C8.97156 0 0 8.97156 0 19.9998C0 31.0281 8.97156 39.9996 19.9998 39.9996C31.0281 39.9996 39.9996 31.0281 39.9996 19.9998C39.9996 8.97156 31.0281 0 19.9998 0ZM38.1752 19.9998C38.1752 30.0236 30.0236 38.1752 19.9998 38.1752C9.97599 38.1752 1.82438 30.0236 1.82438 19.9998C1.82438 9.97599 9.97599 1.82438 19.9998 1.82438C30.0236 1.82438 38.1752 9.97599 38.1752 19.9998Z" fill="#FFFAEE"/>
</svg>
      {/* Layer: 26 */}
      <div style={{
        position: 'absolute',
        left: '439.0px',
        top: '613.2578659057617px',
        width: '13.0px',
        height: '21.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'DIN Condensed', 'Barlow Condensed', sans-serif",
          fontSize: '17.421335220336914px',
          fontWeight: 700,
          lineHeight: '20.905603408813477px',
          letterSpacing: '-0.6968534088134766px',
          color: textColor_5,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_5}
        </div>
      </div>
      {/* Layer Graphic: Vector */}
      <svg style={{ position: 'absolute', left: '618.3900184631348px', top: '606.0px', width: '40.0px', height: '40.0px', overflow: 'visible' }} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.83431 0H35.1648C37.8305 0 39.9995 2.16903 39.9995 4.83473V35.1649C39.9995 37.8309 37.8305 39.9996 35.1648 39.9996H4.83462C2.1686 39.9996 -0.000120428 37.8306 -0.000120428 35.1649V4.83473C-0.000120428 2.16872 2.16891 0 4.83462 0H4.83431ZM35.1648 2.73905H4.83462C3.67904 2.73905 2.73893 3.67916 2.73893 4.83473V14.1131H22.8317L14.4097 6.28643H18.4358L28.3244 15.4799L19.5726 23.6189H37.2604V4.83473C37.2604 3.67916 36.3203 2.73905 35.1648 2.73905ZM4.83431 37.2609H35.1648C36.3203 37.2609 37.2604 36.3208 37.2604 35.1652V26.3579H19.424L27.846 34.1846H23.8199L13.9313 24.9911L22.6832 16.8522H2.73833V35.1649C2.73833 36.3205 3.67843 37.2606 4.83401 37.2606L4.83431 37.2609Z" fill="#FFFAEE"/>
</svg>
      {/* Layer: ® */}
      <div style={{
        position: 'absolute',
        left: '642.0px',
        top: '308.3680000305176px',
        width: '37.0px',
        height: '46.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '48.0px',
          fontWeight: 800,
          lineHeight: '57.263999938964844px',
          letterSpacing: '-1.92px',
          color: textColor_6,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_6}
        </div>
      </div>
    </div>
  );
}
