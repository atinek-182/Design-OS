import React from 'react';

export default function Frame014({
  bgColor = '#181818',
  text_1 = "\u00a92026",
  textColor_1 = '#FFFAEE',
  text_2 = "OPTICAL / 20",
  textColor_2 = '#FFFAEE',
  text_3 = "26 / ARCHITECT",
  textColor_3 = '#FFFAEE',
  text_4 = "43R-004585",
  textColor_4 = '#FFFAEE',
  text_5 = "ALL RIGHTS RESERVED",
  textColor_5 = '#FFFAEE'
}) {
  return (
    <div style={{
      position: 'relative',
      width: '1080.0px',
      height: '1080.0px',
      backgroundColor: bgColor,
      overflow: 'hidden'
    }}>
      {/* Layer: ©2026 */}
      <div style={{
        position: 'absolute',
        left: '681.0px',
        top: '619.0700006484985px',
        width: '83.0px',
        height: '24.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '20.0px',
          fontWeight: 300,
          lineHeight: '23.85999870300293px',
          letterSpacing: '5.0px',
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
      {/* Layer Graphic: Vector */}
      <svg style={{ position: 'absolute', left: '675.6162109375px', top: '434.0849609375px', width: '96.0px', height: '77.0px', overflow: 'visible' }} width="96" height="77" viewBox="0 0 96 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 0C21.5311 0 0 17.2645 0 38.5C0 59.7355 21.5311 77 48 77C74.4689 77 96 59.7355 96 38.5C96 17.2645 74.4689 0 48 0ZM45.8786 6.28349V20.7028C41.5748 20.6423 37.4051 20.3881 33.4793 19.9764C37.5271 13.9351 42.5867 9.1044 45.8786 6.28349ZM45.8786 24.6618V36.5266H27.1394C27.5052 31.9865 29.0658 27.6522 31.2238 23.7053C35.8324 24.2744 40.7823 24.6013 45.8908 24.6739L45.8786 24.6618ZM45.8786 40.4734V52.3382C40.7701 52.4108 35.8202 52.7377 31.2116 53.3068C29.0658 49.3599 27.493 45.0256 27.1394 40.4855H45.8786V40.4734ZM45.8786 56.2851V70.7165C42.5867 67.8956 37.5149 63.0649 33.4671 57.0236C37.3929 56.5998 41.5748 56.3456 45.8786 56.2851ZM50.1336 70.7044V56.2851C54.4008 56.3456 58.5705 56.6119 62.5207 57.0478C58.4729 63.077 53.4255 67.8956 50.1336 70.7165V70.7044ZM50.1336 52.3261V40.4613H68.8727C68.507 45.0135 66.9464 49.3478 64.7884 53.2947C60.1798 52.7256 55.2421 52.3866 50.1336 52.314V52.3261ZM50.1336 36.5145V24.6497C55.2421 24.577 60.1798 24.238 64.7884 23.669C66.9464 27.6159 68.5192 31.9623 68.8727 36.5024H50.1336V36.5145ZM50.1336 20.7028V6.28349C53.4255 9.1044 58.4729 13.923 62.5207 19.9522C58.5705 20.3881 54.4008 20.6423 50.1336 20.7149V20.7028ZM54.1204 4.29796C64.8494 5.48443 74.347 9.77028 81.1135 15.9569C77.3584 17.3855 72.5547 18.5357 67.1537 19.3469C63.1181 12.8454 57.8877 7.60314 54.1204 4.29796ZM28.8341 19.3832C23.4331 18.572 18.6538 17.4219 14.8621 15.9811C21.6287 9.77028 31.1384 5.48443 41.8918 4.28585C38.1245 7.60314 32.8819 12.8575 28.8463 19.3711L28.8341 19.3832ZM26.7737 23.0637C24.6889 27.1921 23.1892 31.7201 22.86 36.5145H4.32817C4.79147 30.0736 7.4981 24.1049 11.8385 19.0805C15.8252 20.7513 20.9337 22.1072 26.7737 23.0637ZM22.86 40.4734C23.1892 45.2678 24.6889 49.7958 26.7737 53.9242C20.9459 54.8807 15.8374 56.2245 11.8385 57.9074C7.4981 52.883 4.79147 46.9143 4.32817 40.4734H22.8479H22.86ZM28.8341 57.6047C32.8819 64.1182 38.1123 69.3726 41.8796 72.6899C31.1262 71.4914 21.6165 67.2055 14.8499 60.9947C18.6538 59.5539 23.4209 58.4038 28.8219 57.5926L28.8341 57.6047ZM67.1415 57.641C72.5547 58.4522 77.3462 59.6145 81.1013 61.031C74.3348 67.2176 64.8372 71.5035 54.1082 72.6899C57.8755 69.3726 63.0937 64.1303 67.1415 57.641ZM69.2263 53.9363C71.3233 49.7958 72.823 45.2678 73.1522 40.4613H91.6718C91.2085 46.9143 88.4897 52.8951 84.1372 57.9316C80.1626 56.2487 75.0541 54.8928 69.2263 53.9363ZM73.1522 36.5145C72.823 31.7201 71.3233 27.18 69.2263 23.0395C75.0541 22.083 80.1504 20.727 84.1372 19.0442C88.4897 24.0807 91.2085 30.0615 91.6718 36.5145H73.1522Z" fill="#FFFAEE"/>
</svg>
      {/* Layer: OPTICAL / 20 */}
      <div style={{
        position: 'absolute',
        left: '305.0px',
        top: '430.9291286468506px',
        width: '224.0px',
        height: '38.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '31.822505950927734px',
          fontWeight: 300,
          lineHeight: '37.96424865722656px',
          letterSpacing: '2.864025535583496px',
          color: textColor_2,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_2}
        </div>
      </div>
      {/* Layer: 26 / ARCHITECT */}
      <div style={{
        position: 'absolute',
        left: '305.0px',
        top: '473.8895778656006px',
        width: '270.0px',
        height: '38.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '31.822505950927734px',
          fontWeight: 300,
          lineHeight: '37.96424865722656px',
          letterSpacing: '2.864025535583496px',
          color: textColor_3,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_3}
        </div>
      </div>
      {/* Layer: 43R-004585 */}
      <div style={{
        position: 'absolute',
        left: '660.13623046875px',
        top: '554.9922113418579px',
        width: '104.0px',
        height: '23.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '19.090797424316406px',
          fontWeight: 300,
          lineHeight: '22.775320053100586px',
          letterSpacing: '-0.7636318969726563px',
          color: textColor_4,
          textAlign: 'left',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'none',
          wordBreak: 'break-word'
        }}>
          {text_4}
        </div>
      </div>
      {/* Layer Graphic: Rectangle 3999 */}
      <svg style={{ position: 'absolute', left: '642.0px', top: '554.92578125px', width: '141.0px', height: '28.0px', overflow: 'visible' }} width="141" height="28" viewBox="0 0 141 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.281762" y="0.281762" width="140.436" height="26.6172" rx="13.2428" stroke="#FFFAEE" strokeWidth="0.563524"/>
</svg>
      {/* Layer Graphic: Vector */}
      <svg style={{ position: 'absolute', left: '634.0px', top: '434.0849609375px', width: '83.0px', height: '77.0px', overflow: 'visible' }} width="83" height="77" viewBox="0 0 83 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.5 0C18.6162 0 0 17.2704 0 38.5C0 59.7296 18.6162 77 41.5 77C64.3838 77 83 59.7296 83 38.5C83 17.2704 64.3838 0 41.5 0ZM79.2144 38.5C79.2144 57.796 62.2996 73.488 41.5 73.488C20.7004 73.488 3.78562 57.796 3.78562 38.5C3.78562 19.204 20.7004 3.51196 41.5 3.51196C62.2996 3.51196 79.2144 19.204 79.2144 38.5Z" fill="#FFFAEE"/>
</svg>
      {/* Layer Graphic: Group 12 */}
      <svg style={{ position: 'absolute', left: '305.0px', top: '551.0px', width: '38.0px', height: '38.0px', overflow: 'visible' }} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.26662 1.26662V-4.39019e-05H-4.39019e-05V1.26662H1.26662ZM18.1042 19.8955C18.5989 20.3902 19.4009 20.3902 19.8955 19.8955C20.3902 19.4009 20.3902 18.5989 19.8955 18.1042L18.9999 18.9999L18.1042 19.8955ZM1.26662 14.5666H2.53328V1.26662H1.26662H-4.39019e-05V14.5666H1.26662ZM1.26662 1.26662V2.53328H14.5666V1.26662V-4.39019e-05H1.26662V1.26662ZM1.26662 1.26662L0.370953 2.16228L18.1042 19.8955L18.9999 18.9999L19.8955 18.1042L2.16228 0.370953L1.26662 1.26662Z" fill="#FFFAEE"/>
<path d="M1.26662 36.7334V38H-4.39019e-05V36.7334H1.26662ZM18.1042 18.1045C18.5989 17.6098 19.4009 17.6098 19.8955 18.1045C20.3902 18.5991 20.3902 19.4011 19.8955 19.8958L18.9999 19.0001L18.1042 18.1045ZM1.26662 23.4334H2.53328V36.7334H1.26662H-4.39019e-05V23.4334H1.26662ZM1.26662 36.7334V35.4667H14.5666V36.7334V38H1.26662V36.7334ZM1.26662 36.7334L0.370953 35.8377L18.1042 18.1045L18.9999 19.0001L19.8955 19.8958L2.16228 37.629L1.26662 36.7334Z" fill="#FFFAEE"/>
<path d="M36.7334 1.26662V-4.39019e-05H38V1.26662H36.7334ZM19.8958 19.8955C19.4011 20.3902 18.5991 20.3902 18.1045 19.8955C17.6098 19.4009 17.6098 18.5989 18.1045 18.1042L19.0001 18.9999L19.8958 19.8955ZM36.7334 14.5666H35.4667V1.26662H36.7334H38V14.5666H36.7334ZM36.7334 1.26662V2.53328H23.4334V1.26662V-4.39019e-05H36.7334V1.26662ZM36.7334 1.26662L37.629 2.16228L19.8958 19.8955L19.0001 18.9999L18.1045 18.1042L35.8377 0.370953L36.7334 1.26662Z" fill="#FFFAEE"/>
<path d="M36.7334 36.7334V38H38V36.7334H36.7334ZM19.8958 18.1045C19.4011 17.6098 18.5991 17.6098 18.1045 18.1045C17.6098 18.5991 17.6098 19.4011 18.1045 19.8958L19.0001 19.0001L19.8958 18.1045ZM36.7334 23.4334H35.4667V36.7334H36.7334H38V23.4334H36.7334ZM36.7334 36.7334V35.4667H23.4334V36.7334V38H36.7334V36.7334ZM36.7334 36.7334L37.629 35.8377L19.8958 18.1045L19.0001 19.0001L18.1045 19.8958L35.8377 37.629L36.7334 36.7334Z" fill="#FFFAEE"/>
</svg>
      {/* Layer Graphic: Group 4 */}
      <svg style={{ position: 'absolute', left: '376.0px', top: '550.61376953125px', width: '41.0px', height: '36.0px', overflow: 'visible' }} width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M19.4822 30.0563V35.301C18.9071 35.3553 18.3243 35.3863 17.7259 35.3863C7.9654 35.3863 0 27.4339 0 17.6893C0 7.94466 7.9654 0 17.7259 0C18.3165 0 18.9071 0.0310338 19.4822 0.085343V5.33006C18.9071 5.24472 18.3243 5.20592 17.7259 5.20592C10.8329 5.20592 5.21442 10.823 5.21442 17.6893C5.21442 24.5555 10.8407 30.1726 17.7259 30.1726C18.3165 30.1726 18.9071 30.1261 19.4822 30.0485V30.0563Z" fill="#FFFAEE"/>
<path fillRule="evenodd" clipRule="evenodd" d="M27.0354 14.9893H37.2699V20.397H27.0354C28.2788 25.9831 33.2834 30.1804 39.2438 30.1804C39.8344 30.1804 40.425 30.1338 41.0001 30.0563V35.301C40.4172 35.3553 39.8344 35.3863 39.2438 35.3863C29.4755 35.3863 21.5256 27.4339 21.5256 17.697C21.5256 7.96017 29.4755 0 39.2438 0C39.8344 0 40.425 0.0310338 41.0001 0.085343V5.33006C40.4172 5.24472 39.8344 5.20592 39.2438 5.20592C33.2834 5.20592 28.271 9.40325 27.0354 14.9893Z" fill="#FFFAEE"/>
</svg>
      {/* Layer Graphic: Vector */}
      <svg style={{ position: 'absolute', left: '449.99999807669883px', top: '545.9999959348406px', width: '93.0px', height: '44.0px', overflow: 'visible' }} width="93" height="44" viewBox="0 0 93 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.2262 20.741L91.7358 20.741C92.4318 20.741 93 21.3069 93 22C93 22.6931 92.4318 23.259 91.7358 23.259L41.2262 23.259C34.1839 23.259 28.4504 28.9688 28.4504 35.9821L28.4504 42.741C28.4504 43.4341 27.8821 44 27.1862 44C26.4902 44 25.922 43.4341 25.922 42.741L25.922 35.9821C25.922 28.9688 20.1885 23.259 13.1462 23.259L1.26418 23.259C0.568244 23.259 -9.91945e-07 22.6931 -9.61651e-07 22C-9.31356e-07 21.3069 0.568244 20.741 1.26418 20.741L13.1462 20.741C20.1885 20.741 25.922 15.0312 25.922 8.01792L25.922 1.25896C25.922 0.565893 26.4902 -2.90723e-06 27.1862 -2.87681e-06C27.8821 -2.84639e-06 28.4504 0.565893 28.4504 1.25896L28.4504 8.01792C28.4504 15.0312 34.1839 20.741 41.2262 20.741Z" fill="#FFFAEE"/>
</svg>
      {/* Layer: ALL RIGHTS RESERVED */}
      <div style={{
        position: 'absolute',
        left: '298.0px',
        top: '619.0700006484985px',
        width: '299.0px',
        height: '24.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '20.0px',
          fontWeight: 300,
          lineHeight: '23.85999870300293px',
          letterSpacing: '5.0px',
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
    </div>
  );
}
