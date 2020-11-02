import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  `;

class ATeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    //THIS BINDING AREA

  }

  render() {
    const { obj } = this.props;
    console.log(obj.ATeam.photo);

    return (
      <div>
        <h3>Team Member</h3>
        <Image src={obj.ATeam.photo} alt="" />
      </div>

    )
  }
}

export default ATeamMember;