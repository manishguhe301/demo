import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import SearchIcon from '../assets/search.svg';

// const StyledWrapper = styled.div`
//   height: 80px;
//   background-color: #ffffff;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
// `;

// const NavItems = styled.div`
//   display: flex;
// `;

// const StyledItem = styled.p`
//   color: #4d4f50;
//   font-weight: 400;
//   font-size: 16px;
//   margin-right: 20px;
//   cursor: pointer;
//   :hover {
//     text-decoration: underline;
//   }
// `;

// const SearchWrapper = styled.div`
//   position: relative;
// `;

// const StyledInput = styled.input`
//   border: 1px solid #dedfe1;
//   border-radius: 20px;
//   height: 36px;
//   width: 293px;
//   padding-left: 40px; /* Add left padding to make space for the search icon */
//   outline: none;
//   color: #a1a2a4;
// `;

// const SearchIconImg = styled.img`
//   position: absolute;
//   left: 16px; /* Adjust as needed */
//   top: 10px; /* Adjust as needed */
// `;

// const StyledButton = styled.button`
//   background: #faaa00;
//   border-radius: 6px;
//   outline: none;
//   border: none;
//   color: #ffffff;
//   padding: 4px 20px 4px 20px;
//   width: 77px;
//   height: 34px;
//   margin-left: 16px;
// `;

const StyledWrapper = styled.div`
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const NavItems = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledItem = styled.p`
  color: #4d4f50;
  font-weight: 400;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const SearchWrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    margin-bottom: 10px;
  }
`;

const StyledInput = styled.input`
  border-radius: 20px;
  height: 36px;
  width: 293px;
  padding-left: 40px;
  outline: none;
  color: #a1a2a4;
  border: 1px solid #dedfe1;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const SearchIconImg = styled.img`
  position: absolute;
  left: 16px;
  top: 10px;

  @media (max-width: 768px) {
    left: 10px;
  }
`;

const StyledButton = styled.button`
  background: #faaa00;
  border-radius: 6px;
  outline: none;
  border: none;
  color: #ffffff;
  padding: 4px 20px;
  width: 77px;
  height: 34px;
  margin-left: 16px;
`;

const NavBar = () => {
  return (
    <StyledWrapper>
      <div>
        <img src={Logo} alt='LOGO' />
      </div>
      <NavItems>
        <StyledItem>Venues</StyledItem>
        <StyledItem>Vendors</StyledItem>
        <StyledItem>Blogs</StyledItem>
      </NavItems>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SearchWrapper>
          <SearchIconImg
            src={SearchIcon}
            alt='search'
            style={{ height: '16px' }}
          />
          <StyledInput type='text' placeholder='Search Venues or vendors' />
        </SearchWrapper>
        <StyledButton>Login</StyledButton>
      </div>
    </StyledWrapper>
  );
};

export default NavBar;
