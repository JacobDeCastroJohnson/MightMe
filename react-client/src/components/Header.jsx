import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.h1`
  margin: auto;
  text-align: center;
  height: 100%;
  padding-right: 20px;
  ${'' /* margin-bottom: 20px; */}
  margin-top: 0px;
  width: 100%;
  background-color: white;
  position: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src='https://mightymemvp.s3-us-west-1.amazonaws.com/mvp_ATeam/MightyMeLogo.png' alt="" />
      {/* <HeaderWrapper> MIGHTY ME</HeaderWrapper> */}
    </HeaderWrapper>
  )
}

export default Header;