import React from 'react';
import ATeamMember from './ATeamMember.jsx';
import styled from 'styled-components';

const ATeamWrapper = styled.h1`
  margin: auto;
  text-align: center;
  height: 100%;
  padding-right: 20px;
  ${'' /* margin-bottom: 20px; */}
  margin-top: 0px;
  width: 100%;
  background-color: teal;
  position: center;
`;

class ATEAM extends React.Component {
  constructor() {
    super();

    this.state = {

    }
    //THIS BINDING AREA

  }

  render() {
    return (
      <div>
        <ATeamWrapper> Your A-Team </ATeamWrapper>
        <ATeamMember />
      </div>
    )
  }
}
export default ATEAM;