import React from 'react';

export default function Frame021({
  bgColor = '#181818',
  text_1 = "\u00d8",
  textColor_1 = '#FFFAEE',
  text_2 = "1080, 9:16, 1x1",
  textColor_2 = '#FFFAEE',
  text_3 = "px",
  textColor_3 = '#FFFAEE',
  text_4 = "\u201cDSGN DEPT\u201d",
  textColor_4 = '#FFFAEE',
  text_5 = "\u00a92026",
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
      {/* Layer Graphic: Vector */}
      <svg style={{ position: 'absolute', left: '506.0px', top: '262.0px', width: '72.0px', height: '88.0px', overflow: 'visible' }} width="72" height="88" viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.7853 84.0025L50.878 72.9887L59.5364 72.8964C62.1474 72.8671 63.9666 70.0078 64.2867 67.5593C64.8005 63.6225 64.3751 59.7486 64.093 55.6021C66.2618 54.8559 68.5317 54.0341 70.4689 52.8854C72.1871 51.8666 72.3976 50.0638 71.408 48.4706C68.8475 43.6702 66.3923 39.0542 64.6615 33.8722C64.6068 25.8937 62.4885 18.3094 57.4139 12.1086C48.2838 0.952246 32.7779 -2.90909 19.3482 2.26451C11.6626 5.22446 6.17529 10.9515 3.07578 18.41C-3.17375 33.4655 0.51532 47.6195 10.3908 60.2265L11.9658 78.4138C12.1721 80.7952 15.3643 82.7489 17.3141 83.86C26.3389 88.9958 41.3142 89.7002 50.7811 84.0025H50.7853ZM46.7383 71.4626L46.713 81.6547C37.5788 85.5034 22.4813 84.6607 15.8444 77.4286L14.421 58.7256C4.94138 46.9823 1.00384 34.0734 6.967 19.7768C9.42218 13.8947 13.5492 9.28704 19.5082 6.62477C32.3863 0.868395 47.7869 5.06095 55.7125 16.7037C59.3048 21.9821 60.2691 27.772 60.7198 34.0734C60.8924 36.4548 62.1979 39.3267 63.2549 41.4355L67.5336 49.9548L61.6083 52.0091C60.6103 52.3529 59.8859 53.2753 59.9491 54.424L60.4923 64.155C60.5766 65.6852 60.126 67.3161 59.528 68.8716L49.7915 68.8548C48.0901 68.8548 46.7383 69.2741 46.7341 71.4668L46.7383 71.4626Z" fill="#FFFAEE"/>
</svg>
      {/* Layer Graphic: Vector */}
      <svg style={{ position: 'absolute', left: '482.0px', top: '583.0px', width: '117.0px', height: '94.0px', overflow: 'visible' }} width="117" height="94" viewBox="0 0 117 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.5 0C26.241 0 0 21.0761 0 47C0 72.9239 26.241 94 58.5 94C90.759 94 117 72.9239 117 47C117 21.0761 90.759 0 58.5 0ZM55.9145 7.67075V25.2736C50.6693 25.1997 45.5875 24.8893 40.8029 24.3868C45.7361 17.0116 51.9026 11.1145 55.9145 7.67075ZM55.9145 30.1066V44.5909H33.0762C33.522 39.0484 35.4239 33.7572 38.054 28.939C43.6707 29.6336 49.7035 30.0327 55.9294 30.1214L55.9145 30.1066ZM55.9145 49.4091V63.8934C49.6886 63.9821 43.6558 64.3811 38.0391 65.0758C35.4239 60.2575 33.5071 54.9664 33.0762 49.4239H55.9145V49.4091ZM55.9145 68.7116V86.3292C51.9026 82.8855 45.7212 76.9884 40.788 69.6132C45.5726 69.0959 50.6693 68.7855 55.9145 68.7116ZM61.1003 86.3145V68.7116C66.301 68.7855 71.3828 69.1107 76.1971 69.6428C71.2639 77.0031 65.1123 82.8855 61.1003 86.3292V86.3145ZM61.1003 63.8786V49.3943H83.9387C83.4929 54.9516 81.5909 60.2428 78.9609 65.061C73.3442 64.3664 67.3263 63.9525 61.1003 63.8638V63.8786ZM61.1003 44.5761V30.0918C67.3263 30.0031 73.3442 29.5893 78.9609 28.8947C81.5909 33.7129 83.5078 39.0189 83.9387 44.5613H61.1003V44.5761ZM61.1003 25.2736V7.67075C65.1123 11.1145 71.2639 16.9969 76.1971 24.3572C71.3828 24.8893 66.301 25.1997 61.1003 25.2884V25.2736ZM65.9592 5.24686C79.0352 6.69528 90.6104 11.9274 98.8571 19.4799C94.2805 21.2239 88.4261 22.628 81.8435 23.6182C76.9252 15.6814 70.5507 9.28176 65.9592 5.24686ZM35.1416 23.6626C28.5591 22.6723 22.7343 21.2682 18.1132 19.5094C26.3599 11.9274 37.95 6.69528 51.0556 5.23208C46.4642 9.28176 40.0748 15.6962 35.1565 23.6478L35.1416 23.6626ZM32.6304 28.1557C30.0895 33.1956 28.2619 38.7233 27.8607 44.5761H5.27496C5.8396 36.7132 9.1383 29.4267 14.4281 23.2931C19.287 25.3327 25.513 26.988 32.6304 28.1557ZM27.8607 49.4091C28.2619 55.262 30.0895 60.7896 32.6304 65.8296C25.5278 66.9972 19.3019 68.6377 14.4281 70.6921C9.1383 64.5585 5.8396 57.272 5.27496 49.4091H27.8458H27.8607ZM35.1416 70.3226C40.0748 78.2742 46.4493 84.6887 51.0408 88.7384C37.9351 87.2752 26.3451 82.0431 18.0983 74.461C22.7343 72.7022 28.5442 71.2981 35.1267 70.3079L35.1416 70.3226ZM81.8287 70.367C88.4261 71.3572 94.2657 72.7761 98.8423 74.5053C90.5955 82.0579 79.0203 87.2899 65.9444 88.7384C70.5358 84.6887 76.8955 78.289 81.8287 70.367ZM84.3696 65.8443C86.9253 60.7896 88.753 55.2619 89.1542 49.3943H111.725C111.16 57.272 107.847 64.5733 102.542 70.7217C97.6981 68.6673 91.4722 67.0119 84.3696 65.8443ZM89.1542 44.5761C88.753 38.7233 86.9253 33.1808 84.3696 28.1261C91.4722 26.9585 97.6833 25.3031 102.542 23.2487C107.847 29.3972 111.16 36.6984 111.725 44.5761H89.1542Z" fill="#FFFAEE"/>
</svg>
      {/* Layer: Ø */}
      <div style={{
        position: 'absolute',
        left: '527.0px',
        top: '428.26300048828125px',
        width: '27.0px',
        height: '21.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'42dot Sans', sans-serif",
          fontSize: '18.0px',
          fontWeight: 600,
          lineHeight: '21.4739990234375px',
          letterSpacing: '-0.72px',
          color: textColor_1,
          textAlign: 'center',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          wordBreak: 'break-word'
        }}>
          {text_1}
        </div>
      </div>
      {/* Layer: 1080, 9:16, 1x1 */}
      <div style={{
        position: 'absolute',
        left: '388.0px',
        top: '452.30000019073486px',
        width: '304.0px',
        height: '23.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'IBM Plex Mono', sans-serif",
          fontSize: '18.0px',
          fontWeight: 700,
          lineHeight: '23.399999618530273px',
          letterSpacing: '-0.72px',
          color: textColor_2,
          textAlign: 'center',
          textAlignLast: 'auto',
          whiteSpace: 'pre-wrap',
          textTransform: 'uppercase',
          wordBreak: 'break-word'
        }}>
          {text_2}
        </div>
      </div>
      {/* Layer: px */}
      <div style={{
        position: 'absolute',
        left: '427.0px',
        top: '477.30000019073486px',
        width: '226.0px',
        height: '23.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'IBM Plex Mono', sans-serif",
          fontSize: '18.0px',
          fontWeight: 700,
          lineHeight: '23.399999618530273px',
          letterSpacing: '-0.72px',
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
      {/* Layer: “DSGN DEPT” */}
      <div style={{
        position: 'absolute',
        left: '476.0px',
        top: '754.3000001907349px',
        width: '128.0px',
        height: '23.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'IBM Plex Mono', sans-serif",
          fontSize: '18.0px',
          fontWeight: 700,
          lineHeight: '23.399999618530273px',
          letterSpacing: '0.9px',
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
      {/* Layer: ©2026 */}
      <div style={{
        position: 'absolute',
        left: '514.0px',
        top: '781.3000001907349px',
        width: '52.0px',
        height: '23.0px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'block',
          width: '100%',
          fontFamily: "'IBM Plex Mono', sans-serif",
          fontSize: '18.0px',
          fontWeight: 700,
          lineHeight: '23.399999618530273px',
          letterSpacing: '-0.72px',
          color: textColor_5,
          textAlign: 'center',
          textAlignLast: 'auto',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          wordBreak: 'break-word'
        }}>
          {text_5}
        </div>
      </div>
    </div>
  );
}
