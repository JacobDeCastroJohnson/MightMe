import React from 'react';
import ATeamMember from './ATeamMember.jsx';
import styled from 'styled-components';

const ATeamWrapper = styled.h1`
  margin: auto;
  text-align: center;
  height: 100%;
  ${'' /* padding-right: 20px; */}
  ${'' /* margin-bottom: 20px; */}
  margin-top: 0px;
  width: 100%;
  ${'' /* background-color: white; */}
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

const ATeamTeam = styled.div`
  ${'' /* background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(209,222,244,1) 0%, rgba(237,230,188,0) 51%); */}
  background: white;
`;

const ATEAM = (props) => {
  const { seededData, modal } = props;
  // console.log('Props check from ATeamLevel: ', seededData.length);

  const family = seededData.slice(0,4);
  const friends = seededData.slice(4,8);

  return (
    <ATeamTeam className="ATeamTeam">
        <ATeamWrapper> Your A-Team </ATeamWrapper>
        <HeroPhotoWrap>
          {
            family.map((item, index) => (
              <ATeamMember
                key={Math.random()}
                index={index}
                obj={item}
                modal={modal}
              />
            ))
          }
        </HeroPhotoWrap>
        <HeroPhotoWrap>
        {
            friends.map((item, index) => (
              <ATeamMember
                key={Math.random()}
                index={index}
                obj={item}
                modal={modal}
              />
            ))
          }
        </HeroPhotoWrap>
      </ATeamTeam>
  )
};

export default ATEAM;