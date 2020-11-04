import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  border-radius: 90px;
  margin-bottom: 70px;
  margin-top: 10px;
  `;

const MsgMe = styled.button`
  background-color: rgb(236, 76, 76);
  color: white;
  padding: 10px;
  border-radius: 15px;
  border-color: white;
`;

class ATeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    }
    //THIS BINDING AREA

  }

  render() {
    const { obj, modal, index } = this.props;
    // console.log(obj.ATeam.photo);

    return (
      <div>
        <h3>{obj.ATeam.firstName} {obj.ATeam.lastName}</h3>
        <MsgMe onClick={(e) => modal(e, index)}> Message Me!</MsgMe>
        <Image src={obj.ATeam.photo} alt="" />
      </div>

    )
  }
}

export default ATeamMember;