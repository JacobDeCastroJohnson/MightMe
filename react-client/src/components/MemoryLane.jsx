import React from 'react';
import MemoryLaneItem from './MemoryLaneItem.jsx';
import styled from 'styled-components';


const MemLaneWrapper = styled.h1`
  margin: auto;
  text-align: center;
  height: 100%;
  padding-top: 40px;
  ${'' /* margin-bottom: 20px; */}
  margin-top: 0px;
  width: 100%;
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


const MemoryBigWrap = styled.div`
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(209,222,244,1) 0%, rgba(237,230,188,0) 51%);
`;


//==============================================================
const MemoryLane = (props) => {

  const { seededData, modal } = props;
  // console.log('Props check from MemoryLaneLevel: ', seededData.length);

  return (
    <MemoryBigWrap>
        <MemLaneWrapper> Memory Lane </MemLaneWrapper>
        <p> Click on any of the below images to enlarge and play corresponding audio!</p>
        <HeroPhotoWrap>
          {
            seededData.map((item, index) => (
              <MemoryLaneItem
                key={Math.random()}
                index={index}
                obj={item}
                modal={modal}
              />
            ))
          }
        </HeroPhotoWrap>
      </MemoryBigWrap>
  )
};

export default MemoryLane;