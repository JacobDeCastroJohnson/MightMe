import React from 'react';
import MemoryLaneItem from './MemoryLaneItem.jsx';
import styled from 'styled-components';


const MemLaneWrapper = styled.h1`
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

const HeroPhotoWrap = styled.div`
  display: flex;
  position: center;
  text-align: center;
  list-style: none;
  overflow: auto hidden;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  object-fit: cover;
`;
const MemoryLane = (props) => {

  const { seededData } = props;
  console.log('Props check from ATeamLevel: ', seededData.length);

  return (
    <div>
        <MemLaneWrapper> Memory Lane </MemLaneWrapper>
        <p> Click on any of the below images to enlarge and play corresponding audio!</p>
        <HeroPhotoWrap>
          {
            seededData.map((item, index) => (
              <MemoryLaneItem
                key={Math.random()}
                index={index}
                obj={item}
              />
            ))
          }
        </HeroPhotoWrap>
      </div>
  )
};

export default MemoryLane;