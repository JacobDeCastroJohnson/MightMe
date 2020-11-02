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
      show: false,
    }
    //THIS BINDING AREA
  }

  render() {
    const { obj, modal, index } = this.props;
    // console.log(obj);

    return (
      <div>
        <Image src={obj.MemoryLane.photo} alt="" onClick={(e) => modal(e, index)}/>
      </div>

    )
  }
}

export default MemoryLaneItem;