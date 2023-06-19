// import React from 'react';
// import styled from 'styled-components';
// import Bride from '../assets/Bride.svg';
// import Sun from '../assets/sun.svg';
// import { TextField } from '@mui/material';

// const StyledWrapper = styled.div`
//   height: 450px;
//   background: #173535;
//   position: relative;
// `;

// const StyledBrideImage = styled.img`
//   width: 350px;
//   position: absolute;
//   bottom: 0;
//   z-index: 1;
//   right: 174px;
// `;

// const StyledSunImage = styled.img`
//   width: 350px;
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `;

// const Intro = () => {
//   return (
//     <div>
//         <h1>hihi</h1>
//       <StyledWrapper>
//         <StyledBrideImage src={Bride} alt='bride' />
//         <StyledSunImage src={Sun} alt='Sun' />
//       </StyledWrapper>
//     </div>
//   );
// };

// export default Intro;

import React from 'react';
import styled from 'styled-components';
import Bride from '../assets/Bride.svg';
import Sun from '../assets/sun.svg';
import { TextField } from '@mui/material';

const StyledWrapper = styled.div`
  height: 450px;
  background: #173535;
  position: relative;
`;

const StyledBrideImage = styled.img`
  width: 350px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  right: 174px;
`;

const StyledSunImage = styled.img`
  width: 350px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Intro = () => {
  return (
    <div>
      <StyledWrapper>
        <div style={{ paddingTop: '4em', paddingLeft: '4em' }}>
          <h1
            style={{
              fontWeight: 700,
              color: ' rgba(255, 255, 255, 0.99)',
            }}
          >
            Plan your love journey with <br></br>us right by your side
          </h1>
          <TextField type='text' value='04 January 1998' label='Outlined' />
          <TextField type='text' value='04 January 1998' label='Outlined' />
        </div>
        <StyledBrideImage src={Bride} alt='bride' />
        <StyledSunImage src={Sun} alt='Sun' />
      </StyledWrapper>
    </div>
  );
};

export default Intro;
