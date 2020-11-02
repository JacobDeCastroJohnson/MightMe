import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  height: 100%;
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 0px;
  width: 100%;
  background-color: teal;
`;

const Header = () => {
  return (
    <div>
      <HeaderWrapper> MIGHTY ME</HeaderWrapper>
    </div>
  )
}

export default Header;