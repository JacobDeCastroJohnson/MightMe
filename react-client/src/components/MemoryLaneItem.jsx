import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  `;

class MemoryLaneItem extends React.Component {
  constructor() {
    super();

    this.state = {

    }
    //THIS BINDING AREA
  }

  render() {
    const { obj } = this.props;
    // console.log(obj);

    return (
      <div>
        <Image src={obj.MemoryLane.photo} alt="" />
      </div>

    )
  }
}

export default MemoryLaneItem;