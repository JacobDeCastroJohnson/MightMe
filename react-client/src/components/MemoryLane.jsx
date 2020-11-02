import React from 'react';
import styled from 'styled-components';

const MemLaneWrapper = styled.h3`
  margin: auto;
  text-align: center;
  height: 100%;
  padding-right: 20px;
  ${'' /* margin-bottom: 20px; */}
  margin-top: 0px;
  width: 100%;
  background-color: rgb(0, 153, 204);
  position: center;
`;

const MemoryLane = () => {

  return (
    <MemLaneWrapper> Test from Memory Lane Level </MemLaneWrapper>
  )
}

export default MemoryLane;