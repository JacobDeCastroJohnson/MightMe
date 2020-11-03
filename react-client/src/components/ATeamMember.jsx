import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  border-radius: 90px;
  margin-bottom: 10px;
  margin-top: 30px;
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
        <button onClick={(e) => modal(e, index)}> Message Me!</button>
        <Image src={obj.ATeam.photo} alt="" />
      </div>

    )
  }
}

export default ATeamMember;