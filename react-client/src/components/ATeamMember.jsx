import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 30px;
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
    // console.log(obj);

    return (
      <div>
        <h3>{obj.ATeam.firstName} {obj.ATeam.lastName}</h3>
        <Image src={obj.ATeam.photo} alt="" />
      </div>

    )
  }
}

export default ATeamMember;